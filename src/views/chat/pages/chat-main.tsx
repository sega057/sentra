import { ThemeField } from "@components/forms";
import { ChatsList } from "@components/layouts/chats-list/chats-list";
import { ChatDetailsWrapper } from "@components/layouts/chat-details/chat-details-wrapper";
import { ChatContentContainer } from "@src/views/chat/chat-content-container";

export const ChatMainPage = () => {
	return (
		<ChatContentContainer
			leftCol={
				<>
					<ThemeField
						wrapperClassName="mx-10 my-5"
						placeholder="Search..."
					/>
					<ChatsList />
				</>
			}
			rightCol={<ChatDetailsWrapper />}
		/>
	);
};
