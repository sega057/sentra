import React from "react";

interface WindowSize {
	width: number;
	height: number;
}

export function useWindowSize(): WindowSize {
	const [{ width, height }, setWindowSize] = React.useState<WindowSize>({
		width: 0,
		height: 0,
	});

	React.useLayoutEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return { width, height };
}
