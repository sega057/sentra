import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SocketActions } from "@src/api/socket-actions";

type SearchResultsItem = {
	type: "chat" | "user";
	name: string;
	id: string;
};

type SearchState = {
	keyword: string;
	searchResults?: SearchResultsItem[];
	isLoading?: boolean;
};

const initialState: SearchState = {
	keyword: "",
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearchKeyword: (state, { payload }: PayloadAction<string>) => {
			state.keyword = payload;
		},
		[SocketActions.searchChatsByName]: (
			state,
			_action: PayloadAction<string>,
		) => {
			// TODO action with payload to use in websocket
			state.isLoading = true;
		},
	},
});

export const { setSearchKeyword, searchChatsByName } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
