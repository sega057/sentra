import * as React from "react";
import { useAppDispatch, useAppSelector } from "@src/hooks/use-app";
import { ChatListItem } from "@components/layouts/chat-list-item/chat-list-item";
import { ChatTypes } from "@src/store/chats/types";
import { setOpenedChatId } from "@src/store/chats/chats.slice";
import { getPrivateChatName } from "@src/utils/helpers/get-private-chat-name";

export const ChatsList = () => {
	const dispatch = useAppDispatch();
	const { chats } = useAppSelector((state) => state.chats);
	const users = useAppSelector((state) => state.contacts.contacts);
	const messages = useAppSelector((state) => state.messages);

	return (
		<ul className="divide-gray-400 divide-y">
			{[...chats]
				.sort((a, b) => b.lastUpdated - a.lastUpdated)
				.map((chat) => {
					const lastMessage = messages[chat.id]?.at(-1);

					let chatName = "";
					if (chat.type === ChatTypes.private) {
						const { firstName, lastName } = users[chat.id];
						chatName = getPrivateChatName(firstName, lastName);
					}

					const handleClick = React.useCallback(() => {
						dispatch(setOpenedChatId(chat.id));
					}, [chat.id]);

					return (
						<ChatListItem
							key={chat.id}
							chatName={chatName}
							lastMessage={lastMessage}
							onClick={handleClick}
						/>
					);
				})}
		</ul>
	);
};
