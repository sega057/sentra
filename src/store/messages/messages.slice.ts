import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "./types";

type MessagesState = { [chatId: number]: Array<Message> };
const initialState: MessagesState = mockMessages();

const messagesSlice = createSlice({
	name: "messages",
	initialState,
	reducers: {
		setInitialMessages(
			state,
			action: PayloadAction<Record<number, Array<Message>>>,
		) {
			state = action.payload;
		},
		addLoadedMessages(
			state,
			action: PayloadAction<{ chatId: number; messages: Array<Message> }>,
		) {
			const { chatId, messages } = action.payload;
			state[chatId].unshift(...messages);
		},
		sendNewMessage(
			state,
			action: PayloadAction<{ chatId: number; message: Message }>,
		) {
			const { chatId, message } = action.payload;
			state[chatId]?.push(message);
		},
		receiveNewMessage(
			state,
			action: PayloadAction<{ chatId: number; message: Message }>,
		) {
			const { chatId, message } = action.payload;
			state[chatId]?.push(message);
		},
		// updateEditedMessage(
		// 	state,
		// 	action: PayloadAction<{
		// 		chatId: number;
		// 		messageId: number;
		// 		text: string;
		// 	}>,
		// ) {
		// 	const { chatId, messageId, text } = action.payload;
		// 	const chatMessages = state[chatId];
		//
		// 	const index = chatMessages.findIndex((msg) => msg.id === messageId);
		// 	chatMessages[index].text = text;
		// },
	},
});

export const messagesReducer = messagesSlice.reducer;

function mockMessages(): MessagesState {
	return {
		1: [
			{
				id: 4613345,
				fromId: 0,
				chatId: 1,
				date: Date.now() - 10000,
				text: "Hello! How are you?",
			},
			{
				id: 9821984,
				fromId: 1,
				chatId: 1,
				date: Date.now() - 9000,
				text: "I'm fine, thanks, and you?",
			},
		],
		2: [
			{
				id: 9814621,
				fromId: 2,
				chatId: 2,
				date: Date.now() - 8000,
				text: "Hi! When are you going to buy a car?",
			},
			{
				id: 32498020,
				fromId: 0,
				chatId: 2,
				date: Date.now() - 7000,
				text: "Hey, probably next week.",
			},
			{
				id: 42734545,
				fromId: 2,
				chatId: 2,
				date: Date.now() - 6000,
				text: "Cool, so in two weeks we will be able to start our trip?",
			},
			{
				id: 23127890,
				fromId: 0,
				chatId: 2,
				date: Date.now() - 5000,
				text: "I think so and Im so exited",
			},
		],
	};
}
