import React from "react";

interface EyeToggleProps {
	isOpened: boolean;
	onClick: () => void;
}

export const EyeToggle: React.FC<EyeToggleProps> = ({ isOpened, onClick }) => {
	return (
		<button
			type="button"
			className="absolute top-1/2 right-2.5 h-5 w-7 -translate-y-1/2
			cursor-pointer select-none"
			onClick={onClick}
		>
			{!isOpened && (
				<span
					className="absolute top-1/2 left-1/2 h-5 w-px
					-translate-y-1/2 rotate-[41deg] bg-white"
				/>
			)}
			<svg
				width="28"
				height="20"
				viewBox="0 0 28 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M14 4.5C7.07692 4.5 4 10 4 10C4 10 7.07692 15.5 14 15.5C20.9231 15.5 24 10 24 10C24 10 20.9231 4.5 14 4.5ZM14 5.28571C7.84615 5.28571 4.92304 10 4.92304 10C4.92304 10 7.84615 14.7143 14 14.7143C20.1538 14.7143 23.077 10 23.077 10C23.077 10 20.1538 5.28571 14 5.28571ZM14 13.1429C15.6993 13.1429 17.0769 11.7358 17.0769 10C17.0769 8.26425 15.6993 6.85714 14 6.85714C12.3007 6.85714 10.9231 8.26425 10.9231 10C10.9231 11.7358 12.3007 13.1429 14 13.1429ZM14 12.3571C15.2745 12.3571 16.3077 11.3018 16.3077 10C16.3077 8.69819 15.2745 7.64286 14 7.64286C12.7255 7.64286 11.6923 8.69819 11.6923 10C11.6923 11.3018 12.7255 12.3571 14 12.3571ZM14 10.7857C14.4248 10.7857 14.7692 10.4339 14.7692 10C14.7692 9.56606 14.4248 9.21429 14 9.21429C13.5752 9.21429 13.2308 9.56606 13.2308 10C13.2308 10.4339 13.5752 10.7857 14 10.7857Z"
					fill="white"
				/>
			</svg>
		</button>
	);
};
