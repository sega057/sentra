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
		setOpenedChatId(state, action: PayloadAction<number>) {
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

function chatsMock(): ChatsState {
	return {
		chats: [
			{
				id: 1,
				type: ChatTypes.private,
				userId: 1,
			},
			{
				id: 2,
				type: ChatTypes.private,
				userId: 2,
			},
			{
				id: 3,
				type: ChatTypes.private,
				userId: 3,
			},
			{
				id: 4,
				type: ChatTypes.private,
				userId: 4,
			},
		],
		openedChatId: undefined,
	};
}
