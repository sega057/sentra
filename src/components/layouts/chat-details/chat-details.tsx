import * as React from "react";
import { useAppDispatch, useAppSelector } from "@src/hooks/use-app";
import { ChatPhotoCover } from "@components/chat-photo-cover/chat-photo-cover";
import { getPrivateChatName } from "@src/utils/helpers/get-private-chat-name";
import { MagnifierIcon } from "@components/icons";
import { sendMessage } from "@src/store/messages/messages.slice";
import { MessagesList } from "@components/layouts/messages-list/messages-list";

interface ChatDetailsProps {
	openedChatId: number;
}

export const ChatDetails: React.FC<ChatDetailsProps> = ({ openedChatId }) => {
	const dispatch = useAppDispatch();
	const messages = useAppSelector((state) => state.messages);
	const contacts = useAppSelector((state) => state.contacts);

	// React.useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		dispatch(
	// 			sendMessage({
	// 				chatId: openedChatId,
	// 				message: {
	// 					id: Date.now(),
	// 					text: "test",
	// 					chatId: openedChatId,
	// 					date: Date.now(),
	// 					fromId: 0,
	// 				},
	// 			}),
	// 		);
	// 	}, 1000);
	// 	return () => clearInterval(interval);
	// }, [openedChatId]);

	const { firstName, lastName } = contacts.contacts[openedChatId];
	const chatName = getPrivateChatName(firstName, lastName);
	return (
		<>
			<div className="flex items-center justify-between bg-gray-50 px-7 py-4">
				<div className="flex items-center">
					<ChatPhotoCover chatName={chatName} />
					<span className="ml-5 text-sm font-medium text-theme-reverse">
						{chatName}
					</span>
				</div>
				<div>
					<MagnifierIcon />
				</div>
			</div>
			<MessagesList messages={messages[openedChatId]} />
			<input
				type="text"
				className="mx-auto mt-2.5 mb-5 w-4/5 rounded-lg bg-gray-50 px-3 py-2"
				placeholder="Message..."
			/>
		</>
	);
};
