import React from "react";

export const DARK_THEME = "dark";

export function useTheme(theme?: typeof DARK_THEME | undefined): void {
	React.useEffect(() => {
		if (theme === DARK_THEME) {
			document.body.dataset.theme = DARK_THEME;
		} else {
			document.body.removeAttribute("data-theme");
		}
	}, [theme]);
}
