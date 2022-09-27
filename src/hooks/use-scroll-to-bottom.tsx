import React from "react";

export function useScrollToBottom<
	T extends HTMLElement,
>(): React.MutableRefObject<T | null> {
	const listContainerRef = React.useRef<T | null>(null);
	let isScrolledBottom: boolean | null = null;
	let isScrollBarVisible: boolean | null = null;

	React.useEffect(() => {
		const listContainer = listContainerRef.current;
		if (listContainer === null) {
			return;
		}

		const scrollListener = () => {
			const { scrollTop, scrollHeight, clientHeight } = listContainer;
			isScrolledBottom = scrollTop + clientHeight >= scrollHeight - 10;
		};
		const scrollToBottom = () => {
			listContainer.scroll({ top: listContainer.scrollHeight });
		};
		const getIsScrollBarVisible = () => {
			return listContainer.clientHeight < listContainer.scrollHeight;
		};
		const mutationCallback = (mutations: MutationRecord[]) => {
			mutations.forEach((mutation) => {
				if (
					mutation.type !== "childList" ||
					!mutation.addedNodes.length
				) {
					return;
				}

				if (isScrollBarVisible === false) {
					if (getIsScrollBarVisible()) {
						scrollToBottom();
						isScrollBarVisible = true;
					}
				}
				if (isScrolledBottom) {
					scrollToBottom();
				}
			});
		};

		if (isScrollBarVisible === null) {
			isScrollBarVisible = getIsScrollBarVisible();
		}
		if (isScrolledBottom === null && isScrollBarVisible) {
			scrollToBottom();
		}
		const observer = new MutationObserver(mutationCallback);
		observer.observe(listContainer, { subtree: true, childList: true });
		listContainer.addEventListener("scroll", scrollListener);

		return () => {
			listContainer.removeEventListener("scroll", scrollListener);
			observer.disconnect();
		};
	}, []);

	return listContainerRef;
}
