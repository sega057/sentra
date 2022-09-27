import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "./types";
import dayjs from "dayjs";

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
		sendMessage(
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

export const {
	setInitialMessages,
	addLoadedMessages,
	receiveNewMessage,
	sendMessage,
} = messagesSlice.actions;

function mockMessages(): MessagesState {
	return {
		1: [
			{
				id: 4613345,
				fromId: 0,
				chatId: 1,
				date: +dayjs("2021-12-19"),
				text: "Hello! How are you?",
			},
			{
				id: 9821984,
				fromId: 1,
				chatId: 1,
				date: +dayjs("2021-12-31"),
				text: "I'm fine, thanks, and you?",
			},
		],
		2: [
			{
				id: 9814621,
				fromId: 2,
				chatId: 2,
				date: +dayjs("2022-06-02 15:32"),
				text: "Hi! When are you going to buy a car?",
			},
			{
				id: 32498020,
				fromId: 0,
				chatId: 2,
				date: +dayjs("2022-06-02 15:33"),
				text: "Hey, probably next week.",
			},
			{
				id: 32406439,
				fromId: 0,
				chatId: 2,
				date: +dayjs("2022-06-02 15:33"),
				text: "But im not sure",
			},
			{
				id: 91235749,
				fromId: 0,
				chatId: 2,
				date: +dayjs("2022-06-02 15:33"),
				text: "And when are you going?",
			},
			{
				id: 54681643,
				fromId: 2,
				chatId: 2,
				date: +dayjs("2022-06-02 15:35"),
				text: "Test string it's nice",
			},
			{
				id: 54684621643,
				fromId: 2,
				chatId: 2,
				date: +dayjs("2022-06-02 15:35"),
				text: "Test string it's nice",
			},
			{
				id: 7624572424,
				fromId: 2,
				chatId: 2,
				date: +dayjs("2022-06-02 15:35"),
				text: "Test string it's nice",
			},
			{
				id: 913850915139,
				fromId: 2,
				chatId: 2,
				date: +dayjs("2022-06-02 15:35"),
				text: "Test string it's nice",
			},
			{
				id: 2490657204980,
				fromId: 2,
				chatId: 2,
				date: +dayjs("2022-06-02 15:35"),
				text: "Test string it's nice",
			},
			{
				id: 234968193151,
				fromId: 2,
				chatId: 2,
				date: +dayjs("2022-06-02 15:35"),
				text: "Test string it's nice",
			},
			{
				id: 46845792409249,
				fromId: 2,
				chatId: 2,
				date: +dayjs("2022-06-02 15:35"),
				text: "Test string it's nice",
			},
			{
				id: 42734545,
				fromId: 2,
				chatId: 2,
				date: +dayjs("2022-06-03 19:35"),
				text: "Cool, so in two weeks we will be able to start our trip?",
			},
			{
				id: 23127890,
				fromId: 0,
				chatId: 2,
				date: +dayjs("2022-06-03 19:40"),
				text: "I think so and Im so exited",
			},
			{
				id: 135467298,
				fromId: 0,
				chatId: 2,
				date: +dayjs("2022-06-05 03:20"),
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
			},
			// test
			{
				id: 42733254545,
				fromId: 2,
				chatId: 2,
				date: +dayjs("2022-06-09 19:35"),
				text: "Cool, so in two weeks we will be able to start our trip?",
			},
			{
				id: 23112427890,
				fromId: 0,
				chatId: 2,
				date: +dayjs("2022-06-09 19:40"),
				text: "I think so and Im so exited",
			},
			{
				id: 135463527298,
				fromId: 0,
				chatId: 2,
				date: +dayjs("2022-06-10 03:20"),
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
			},
		],
		3: [
			{
				id: 49545346,
				fromId: 3,
				chatId: 3,
				date: +dayjs("2022-06-05 03:20"),
				text: "Very long message with lots of words and other stuff abracadabra hello world",
			},
		],
	};
}
