import { SocketEvents } from "@src/api/socket-actions";
import { addMessagesToStart } from "@src/store/messages/messages.slice";
import { AppDispatch } from "@src/store/store";

type SocketEventsList = Array<{
	event: SocketEvents;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: (data: any) => void;
}>;

export function getSocketEvents(dispatch: AppDispatch): SocketEventsList {
	return [
		{
			event: SocketEvents.searchResults,
			handler: (data) => {
				dispatch(data);
			},
		},
		{
			event: SocketEvents.message,
			handler: (data) => {
				const { chatId, message } = JSON.parse(data);
				if (!chatId || !message) {
					return;
				}

				dispatch(addMessagesToStart({ chatId, messages: [message] }));
				// TODO: add a notification
			},
		},
	];
}
