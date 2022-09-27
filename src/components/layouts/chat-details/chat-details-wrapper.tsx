import { useAppSelector } from "@/hooks/use-app";
import * as React from "react";
import { ChatDetails } from "@components/layouts/chat-details/chat-details";

export const ChatDetailsWrapper = () => {
	const { openedChatId } = useAppSelector((state) => state.chats);

	if (openedChatId === undefined) {
		return null;
	}
	return <ChatDetails openedChatId={openedChatId} />;
};
