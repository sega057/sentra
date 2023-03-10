import { ChatsList } from "@components/layouts/chats-list/chats-list";
import { ChatDetailsWrapper } from "@components/layouts/chat-details/chat-details-wrapper";
import { ChatContentContainer } from "@src/views/chat/chat-content-container";
import { ChatSearchField } from "@components/forms/chat-search-field";

export const ChatMainPage = () => {
	return (
		<ChatContentContainer
			leftCol={
				<>
					<ChatSearchField />
					<ChatsList />
				</>
			}
			rightCol={<ChatDetailsWrapper />}
		/>
	);
};
