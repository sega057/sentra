import React from "react";
import { ThemeField } from "@components/forms/theme-field";
import { useAppDispatch } from "@src/hooks/use-app";
import { Chat } from "@src/store/chats/types";
import { useInput } from "@src/hooks/use-input";
import { searchChatsByName } from "@src/store/search/search.slice";

export const ChatSearchField = () => {
	const dispatch = useAppDispatch();
	const [searchedChats, setSearchedChats] = React.useState<Chat[]>([]);
	const { value, onChange } = useInput();

	const handleSubmit = React.useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			dispatch(searchChatsByName(value));
		},
		[value],
	);

	// write onChange function with debounce for one second and then dispatch searchChatsByName
	// const debouncedSearch = React.useCallback(debounce((value) => {
	// 	dispatch(searchChatsByName(value));
	// }, 1000), []);

	return (
		<form onSubmit={handleSubmit}>
			<ThemeField
				wrapperClassName="mx-10 my-5"
				value={value}
				onChange={onChange}
				placeholder="Search..."
			/>
		</form>
	);
};
