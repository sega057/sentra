import React from "react";
import dayjs from "dayjs";
import { DARK_THEME, useTheme } from "@src/hooks/use-theme";

export const ThemeBtn = () => {
	const [isDark, setTheme] = React.useState(getIsDarkTheme);
	useTheme(isDark ? DARK_THEME : undefined);

	function getIsDarkTheme() {
		const curHours = +dayjs().format("H");
		return curHours > 19 || curHours < 6;
	}

	const handleClick = () => {
		setTheme((prev) => !prev);
	};

	return (
		<button
			onClick={handleClick}
			className="fixed left-10 bottom-10 z-10 h-16 w-16
			cursor-pointer rounded-full border-[13.5px] border-solid border-white bg-black"
		>
			<span
				className="pointer-events-none absolute top-1 right-1 bottom-1 left-1/2
				rounded-r-2xl bg-white"
			/>
		</button>
	);
};
