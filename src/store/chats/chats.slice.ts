import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chat, ChatTypes } from "./types";

interface ChatsState {
	chats: { [chatId: number]: Chat };
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
		addChats(state, action: PayloadAction<Array<Chat>>) {
			action.payload.forEach((chat) => {
				state.chats[chat.id] = chat;
			});
		},
		setOpenedChatId(
			state,
			action: PayloadAction<ChatsState["openedChatId"]>,
		) {
			state.openedChatId = action.payload;
		},
		removeChatById(state, action: PayloadAction<number>) {
			delete state.chats[action.payload];
		},
	},
});

export const chatsReducer = chatsSlice.reducer;

export const {
	addChats,
	setOpenedChatId,
	removeChatById,
} = chatsSlice.actions;

function chatsMock(): ChatsState {
	return {
		chats: {
			1: {
				id: 1,
				type: ChatTypes.private,
				userId: 1,
				lastUpdated: Date.now() - 4000,
			},
			2: {
				id: 2,
				type: ChatTypes.private,
				userId: 2,
				lastUpdated: Date.now() - 6000,
			},
			3: {
				id: 3,
				type: ChatTypes.private,
				userId: 3,
				lastUpdated: Date.now() - 2000,
			},
			4: {
				id: 4,
				type: ChatTypes.private,
				userId: 4,
				lastUpdated: Date.now(),
			},
		},
		openedChatId: 1,
	};
}
