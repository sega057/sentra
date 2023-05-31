import * as React from "react";
import { useAppDispatch, useAppSelector } from "@src/hooks/use-app";
import { ChatListItem } from "@components/layouts/chat-list-item/chat-list-item";
import { ChatTypes } from "@src/store/chats/types";
import { setOpenedChatId } from "@src/store/chats/chats.slice";
import { getPrivateChatName } from "@src/utils/helpers/get-private-chat-name";

export const ChatsList = () => {
	const dispatch = useAppDispatch();
	const chats = useAppSelector((state) => state.chats.chats);
	const users = useAppSelector((state) => state.users.users);
	const messages = useAppSelector((state) => state.messages);

	// TODO: Add a loading indicator
	// TODO: Add a placeholder for empty chats list
	// TODO: Add a placeholder for empty search results
	// TODO: Get chatId from path hash and set it as openedChatId

	return (
		<ul className="divide-gray-400 divide-y">
			{Object.values(chats)
				.sort((a, b) => b.lastUpdated - a.lastUpdated)
				.map((chat) => {
					const lastMessage = messages[chat.id]?.at(-1);
					const { firstName, lastName, username } = users[chat.id];

					let chatName = "";
					if (chat.type === ChatTypes.private) {
						chatName = getPrivateChatName(firstName, lastName);
					}

					const handleClick = React.useCallback(() => {
						dispatch(setOpenedChatId(chat.id));
						window.location.hash = `@${username}`;
					}, [chat.id, username]);

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
