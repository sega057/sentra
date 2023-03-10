import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchResultsItem = {
	type: "chat" | "user";
	name: string;
	id: string;
};

type SearchState = {
	searchTerm: string;
	searchResults?: SearchResultsItem[];
	isLoading?: boolean;
};

const initialState: SearchState = {
	searchTerm: "",
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearchTerm: (state, { payload }: PayloadAction<string>) => {
			state.searchTerm = payload;
		},
		searchChatsByName: (state, { payload }: PayloadAction<string>) => {
			state.isLoading = true;
		},
	},
});

export const searchChatsByName = createAction<string>(
	"socket/searchChatsByName",
);
export const { setSearchTerm } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
