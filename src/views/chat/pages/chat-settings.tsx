import { ThemeField } from "@components/forms";
import { ChatContentContainer } from "@src/views/chat/chat-content-container";

export const ChatSettingsPage = () => {
	return (
		<ChatContentContainer
			leftCol={
				<>
					<ThemeField
						wrapperClassName="mx-10 my-5"
						placeholder="Search..."
					/>
					Configurations list
				</>
			}
		/>
	);
};
