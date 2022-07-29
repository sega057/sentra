import React from "react";

export enum Theme {
	light = "light",
	dark = "dark",
}

export function useTheme(value?: Theme | undefined): void {
	React.useEffect(() => {
		if (typeof value === "string") {
			document.body.dataset.theme = value;
		} else {
			document.body.removeAttribute("data-theme");
		}
	}, [value]);
}
