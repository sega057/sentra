import * as React from "react";
import { Message } from "@src/store/messages/types";
import { useAppDispatch } from "@src/hooks/use-app";
import { setOpenedChatId } from "@src/store/chats/chats.slice";
import { ChatPhotoCover } from "@components/chat-photo-cover/chat-photo-cover";
import { getMessageDate } from "@src/utils/helpers/get-message-date";

interface ChatListItemProps {
	chatName: string;
	lastMessage: Message | undefined;
	onClick: () => void;
}

export const ChatListItem: React.FC<ChatListItemProps> = ({
	onClick,
	chatName,
	lastMessage,
}) => {
	return (
		<li>
			<button
				onClick={onClick}
				className="flex w-full cursor-pointer justify-between gap-4 px-3 py-1.5"
			>
				<div className="flex items-center">
					<div className="my-2">
						<ChatPhotoCover chatName={chatName} />
					</div>
					<div className="pl-2.5 text-left">
						<span className="block text-sm">{chatName}</span>
						{lastMessage && (
							<span className="overflow-hidden text-xs [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
								{lastMessage.text}
							</span>
						)}
					</div>
				</div>
				<div className="flex flex-col">
					{lastMessage && (
						<span className="text-[10px] font-medium">
							{getMessageDate(lastMessage.date)}
						</span>
					)}
				</div>
			</button>
		</li>
	);
};
