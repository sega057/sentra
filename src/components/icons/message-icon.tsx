import React from "react";

export const MessageIcon: React.FC<{ strokeClass?: string }> = ({
	strokeClass,
}) => (
	<svg
		width="28"
		height="27"
		viewBox="0 0 28 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			className={strokeClass}
			d="M8 9H17"
			stroke="#ffffff"
			strokeWidth="2"
			strokeMiterlimit="10"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			className={strokeClass}
			d="M8 13H12"
			stroke="#ffffff"
			strokeWidth="2"
			strokeMiterlimit="10"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			className={strokeClass}
			d="M9 1C4.6 1 1 4.6 1 9V21V26C4.7 22.8 9.4 21 14.3 21H19C23.4 21 27 17.4 27 13V9C27 4.6 23.4 1 19 1H9Z"
			stroke="#ffffff"
			strokeWidth="2"
			strokeMiterlimit="10"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
