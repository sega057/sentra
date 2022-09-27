import dayjs from "dayjs";
import { TextMessage } from "@components/messages/text-message";
import React from "react";
import { Message } from "@/store/messages/types";

interface MessagesDateGroupProps {
	date: string;
	messages: Array<Message>;
}

export const MessagesDateGroup: React.FC<MessagesDateGroupProps> = ({
	date,
	messages,
}) => {
	return (
		<div className="flex flex-col">
			<div className="sticky top-2.5 mt-3 mb-2 text-center">
				<span className="rounded-full bg-gray-600/70 px-2 py-1 text-sm text-white">
					{dayjs(date).format("D MMM")}
				</span>
			</div>
			{messages.map((msg) => (
				<TextMessage key={msg.id} message={msg} />
			))}
		</div>
	);
};
