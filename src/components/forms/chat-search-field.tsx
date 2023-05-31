import React from "react";
import { ThemeField } from "@components/forms/theme-field";
import { useAppDispatch, useAppSelector } from "@src/hooks/use-app";
import { useInput } from "@src/hooks/use-input";
import { searchChatsByName } from "@src/store/search/search.slice";

export const ChatSearchField = () => {
	const dispatch = useAppDispatch();
	const { value, onChange } = useInput();

	// TODO implement debounce search

	// const debouncedSearch = React.useCallback(() => {
	// 	debounce((value) => {
	// 		dispatch(searchChatsByName(value));
	// 	}, 1000)
	// }, []);

	return (
		<form>
			<ThemeField
				wrapperClassName="mx-10 my-5"
				value={value}
				onChange={onChange}
				placeholder="Search..."
			/>
		</form>
	);
};
