import React from "react";
import moment from "moment";
import { Theme, useTheme } from "../../../hooks/use-theme";

export const ThemeBtn = () => {
	const [isDark, setTheme] = React.useState(getIsDarkTheme);
	useTheme(isDark ? Theme.dark : Theme.light);

	function getIsDarkTheme() {
		const curHours = +moment().format("H");
		return curHours > 19 || curHours < 6;
	}

	const handleClick = () => {
		setTheme((prev) => !prev);
	};

	return (
		<button
			onClick={handleClick}
			className="absolute left-10 bottom-10 z-10 h-16 w-16
			cursor-pointer rounded-full border-[13.5px] border-solid border-white bg-black"
		>
			<span
				className="pointer-events-none absolute top-1 right-1 bottom-1 left-1/2
				rounded-r-2xl bg-white"
			/>
		</button>
	);
};
