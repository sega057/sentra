import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chat, ChatTypes } from "./types";

interface ChatsState {
	chats: Array<Chat>;
	openedChatId?: number;
	// pinnedChats?: Array<Chat>;
}

const initialState: ChatsState = chatsMock();
// const initialState: ChatsState = {
// 	chats: [],
// };

const chatsSlice = createSlice({
	name: "chats",
	initialState,
	reducers: {
		setInitialChats(state, action: PayloadAction<Array<Chat>>) {
			state.chats = action.payload;
		},
		addLoadedChats(state, action: PayloadAction<Array<Chat>>) {
			state.chats.push(...action.payload);
		},
		setOpenedChatId(
			state,
			action: PayloadAction<ChatsState["openedChatId"]>,
		) {
			state.openedChatId = action.payload;
		},
		removeChatById(state, action: PayloadAction<number>) {
			const index = state.chats.findIndex(
				(chat) => chat.id === action.payload,
			);
			state.chats.splice(index, 1);
		},
	},
});

export const chatsReducer = chatsSlice.reducer;

export const {
	setInitialChats,
	addLoadedChats,
	setOpenedChatId,
	removeChatById,
} = chatsSlice.actions;

function chatsMock(): ChatsState {
	return {
		chats: [
			{
				id: 1,
				type: ChatTypes.private,
				userId: 1,
				lastUpdated: Date.now() - 4000,
			},
			{
				id: 2,
				type: ChatTypes.private,
				userId: 2,
				lastUpdated: Date.now() - 6000,
			},
			{
				id: 3,
				type: ChatTypes.private,
				userId: 3,
				lastUpdated: Date.now() - 2000,
			},
			{
				id: 4,
				type: ChatTypes.private,
				userId: 4,
				lastUpdated: Date.now(),
			},
		],
		openedChatId: 1,
	};
}
