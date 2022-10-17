import React from "react";
import clsx from "clsx";
import dayjs from "dayjs";
import { Message } from "@src/store/messages/types";
import { TickIcon } from "@components/icons";

interface TextMessageProps {
	message: Message;
}

export const TextMessage: React.FC<TextMessageProps> = React.memo(
	({ message }) => {
		const isMyMessage = message.fromId === 0;
		const messageTime = dayjs(message.date).format("HH:mm");

		return (
			<div
				className={clsx(
					"mt-1 w-fit max-w-[80%] rounded-xl px-4 py-3",
					isMyMessage
						? "self-end bg-green-200 text-gray-900"
						: "bg-sky-700 text-white",
				)}
			>
				<span>{message.text}</span>
				<div className="float-right ml-3">
					<span className="text-[10px] text-blue-600">
						{messageTime}
					</span>
					{isMyMessage && (
						<div className="ml-1 inline-block">
							<TickIcon />
						</div>
					)}
				</div>
			</div>
		);
	},
);

TextMessage.displayName = "TextMessage";
