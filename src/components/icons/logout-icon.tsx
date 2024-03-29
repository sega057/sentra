import React from "react";

export const LogoutIcon: React.FC<{ fillClass?: string }> = ({ fillClass }) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			className={fillClass}
			d="M12.3 24V22H22V2H12.3V0H22C22.5333 0 23 0.2 23.4 0.6C23.8 1 24 1.46667 24 2V22C24 22.5333 23.8 23 23.4 23.4C23 23.8 22.5333 24 22 24H12.3ZM9.7 17.8333L8.26667 16.4L11.6667 13H0V11H11.6L8.2 7.6L9.63333 6.16667L15.5 12.0333L9.7 17.8333Z"
			fill="#ffffff"
		/>
	</svg>
);
