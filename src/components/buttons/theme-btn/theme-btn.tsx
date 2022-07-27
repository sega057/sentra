import React from "react";
import moment from "moment";
import {Theme, useTheme} from "../../../hooks/use-theme";
import "./theme-btn.scss";

export const ThemeBtn = () => {
	const [isDark, setTheme] = React.useState(getIsDarkTheme);
	useTheme(isDark ? Theme.dark : Theme.light);

	function getIsDarkTheme() {
		const curHours = +moment().format("H")
		return curHours > 19 || curHours < 6;
	}

	const handleClick = () => {
		setTheme(prev => !prev);
	}

	return <button onClick={handleClick} className="theme-btn">
		<span className="semi-circle"/>
	</button>
}