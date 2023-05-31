import * as React from "react";
import { useAppSelector } from "@src/hooks/use-app";
import { ChatPhotoCover } from "@components/chat-photo-cover/chat-photo-cover";
import { getPrivateChatName } from "@src/utils/helpers/get-private-chat-name";
import { MagnifierIcon } from "@components/icons";
import { MessagesList } from "@components/layouts/messages-list/messages-list";

interface ChatDetailsProps {
	openedChatId: number;
}

export const ChatDetails: React.FC<ChatDetailsProps> = ({ openedChatId }) => {
	const messages = useAppSelector((state) => state.messages);
	const { chats } = useAppSelector((state) => state.chats);
	const { users } = useAppSelector((state) => state.users);

	const chat = chats[openedChatId];
	const { firstName, lastName } = users[chat.userId];
	const chatTitle = getPrivateChatName(firstName, lastName);
	return (
		<>
			<div className="flex items-center justify-between bg-gray-50 px-7 py-4">
				<div className="flex items-center">
					<ChatPhotoCover chatName={chatTitle} />
					<span className="ml-5 text-sm font-medium text-theme-reverse">
						{chatTitle}
					</span>
				</div>
				<div>
					<MagnifierIcon />
				</div>
			</div>
			<MessagesList key={openedChatId} messages={messages[openedChatId] ?? []} />
			<input
				type="text"
				className="mx-auto mt-2.5 mb-5 w-4/5 rounded-lg bg-gray-50 px-3 py-2"
				placeholder="Message..."
			/>
		</>
	);
};
