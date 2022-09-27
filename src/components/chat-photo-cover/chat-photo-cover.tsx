import React from "react";

export const ChatPhotoCover = React.memo<{ chatName: string }>(
	({ chatName }) => {
		const letters = chatName
			.split(" ")
			.map((word) => word[0].toUpperCase())
			.join("");

		return (
			<div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white">
				<span className="text-sm font-bold text-black">{letters}</span>
			</div>
		);
	},
);

ChatPhotoCover.displayName = "ChatPhotoCover";
