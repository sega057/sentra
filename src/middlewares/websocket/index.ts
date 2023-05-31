import { AppDispatch, RootState } from "@src/store/store";
import { AnyAction, Middleware } from "@reduxjs/toolkit";
import { SocketClient } from "@src/api/socket-client";
import { logout, signIn, ClientState } from "@src/store/client/client.slice";
import { SocketActions } from "@src/api/socket-actions";
import { searchChatsByName } from "@src/store/search/search.slice";
import { sendMessage } from "@src/store/messages/messages.slice";
import { getSocketEvents } from "./socket-events";

interface SocketMiddlewareParams {
	dispatch: AppDispatch;
	getState: () => RootState;
}

export default function socketMiddleware(socket: SocketClient): Middleware {
	return ({ dispatch }: SocketMiddlewareParams) =>
		(next) =>
		(action: AnyAction) => {
			const { type, payload } = action;

			switch (type) {
				// Connect to the socket when a user logs in
				case signIn.type: {
					const { idToken, username } =
						payload as Required<ClientState>;
					if (!idToken || !username) {
						break;
					}

					socket.setSocketAuthData({
						Username: username,
						Authorizer: idToken,
					});

					socket.connect();

					getSocketEvents(dispatch).forEach(({ event, handler }) => {
						socket.on(event, handler);
					});
					break;
				}

				case logout.type: {
					socket.disconnect(1000);
					break;
				}

				case searchChatsByName.type: {
					const name = action.payload;
					socket.emit(SocketActions.searchChatsByName, { name });
					break;
				}

				case sendMessage.type: {
					const { chatId, message } = action.payload;
					socket.emit(SocketActions.sendMessage, {
						chatId,
						message,
					});
					break;
				}
			}

			return next(action);
		};
}
