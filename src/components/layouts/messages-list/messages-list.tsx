import React from "react";
import dayjs from "dayjs";
import { Message } from "@/store/messages/types";
import { MessagesDateGroup } from "@components/layouts/messages-date-group/messages-date-group";

interface MessagesListProps {
	messages: Array<Message>;
}

export const MessagesList: React.FC<MessagesListProps> = ({ messages }) => {
	const messagesGroupedByDate = React.useMemo(
		() =>
			messages.reduce<Record<string, Array<Message>>>((acc, message) => {
				const date = dayjs(message.date).format("YYYY-MM-DD");
				const messageDateGroup = acc[date];
				if (messageDateGroup) {
					messageDateGroup.push(message);
				} else {
					acc[date] = [message];
				}

				return acc;
			}, {}),
		[messages],
	);

	return (
		<div className="flex h-full flex-col-reverse overflow-y-auto">
			<div className="mx-auto w-4/5">
				{Object.entries(messagesGroupedByDate).map(
					([date, messages]) => {
						return (
							<MessagesDateGroup
								key={date}
								date={date}
								messages={messages}
							/>
						);
					},
				)}
			</div>
		</div>
	);
};
