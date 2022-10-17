import React from "react";

interface ChatContainerProps {
	leftCol: React.ReactNode;
	rightCol?: React.ReactNode;
}

export const ChatContentContainer: React.FC<ChatContainerProps> = ({
	leftCol,
	rightCol,
}) => {
	return (
		<>
			<div className="divide-gray-400 w-1/4 min-w-[250px] flex-none divide-y">
				{leftCol}
			</div>
			<div className="flex h-full grow flex-col bg-white">
				{rightCol ? (
					rightCol
				) : (
					<div className="flex h-full flex-col items-center justify-center text-xl">
						<span>Start</span>
						<span>chatting...</span>
					</div>
				)}
			</div>
		</>
	);
};
