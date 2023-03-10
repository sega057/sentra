import { RootState } from "@src/store/store";
import { AnyAction, Dispatch, Middleware } from "@reduxjs/toolkit";
import { SocketClient } from "@src/api/socket-client";
import { logout, signIn, UserState } from "@src/store/user/user.slice";
import { SocketActions } from "@src/api/socket-actions";
import { searchChatsByName } from "@src/store/search/search.slice";

interface SocketMiddlewareParams {
	dispatch: Dispatch;
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
						payload as Required<UserState>;
					if (!idToken || !username) {
						break;
					}

					socket.setSocketAuthData({
						Username: username,
						Authorizer: idToken,
					});
					socket.connect();
					console.log("socket connect was invoked");
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

				case "socket/emit": {
					const { action, data } = payload;
				}

				// 	// Set up all the socket event handlers
				// 	// When these events are received from the socket, they'll dispatch the proper Redux action
				//
				// 	// Update the online users list every time a user logs in or out
				// 	socket.on("users online", (onlineUsers: string[]) => {
				// 		dispatch(setOnlineUsersByUsername(onlineUsers));
				// 	});
				//
				// 	// Append a message every time a new one comes in
				// 	socket.on("receive message", (message: Message) => {
				// 		dispatch(addMessage(message));
				// 	});
				//
				// 	// Remove if some user stops typing
				// 	socket.on("user stopped typing...", (username: string) => {
				// 		dispatch(removeTypingUser(username));
				// 	});
				//
				// 	// Add if some user starts typing
				// 	socket.on("user starts typing...", (username: string) => {
				// 		dispatch(setTypingUser(username));
				// 	});
				//
				// 	// Append a user every time a new one is registered
				// 	socket.on("new user added", (user: User) => {
				// 		dispatch(addUser(user));
				// 	});
				//
				// 	// Add the current user to the online users list
				// 	socket.emit("new login", payload);
				//
				// 	break;
				// }
				//
				// // Telling the sever that this user is typing...
				// case "users/sendThisUserIsTyping": {
				// 	socket.emit("typing...", payload);
				//
				// 	break;
				// }
				//
				// // Telling the server that this user stopped typing..
				// case "users/sendThisUserStoppedTyping": {
				// 	socket.emit("stopped typing...", payload);
				//
				// 	return;
				// }
				//
				// // Disconnect from the socket when a user logs out
				// case "users/logout": {
				// 	socket.disconnect();
				//
				// 	break;
				// }
				// // Let the server be the source of truth for all messages; don't dispatch anything
				// case "messages/sendMessage": {
				// 	socket.emit("send message", payload);
				//
				// 	return;
				// }
			}

			return next(action);
		};
}
