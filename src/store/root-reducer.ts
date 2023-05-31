import { combineReducers } from "@reduxjs/toolkit";
import { clientReducer } from "./client/client.slice";
import { signUpReducer } from "./sign-up/sign-up.slice";
import { chatsReducer } from "./chats/chats.slice";
import { messagesReducer } from "./messages/messages.slice";
import { usersReducer } from "./users/users.slice";
import { searchReducer } from "./search/search.slice";

export const rootReducer = combineReducers({
	client: clientReducer,
	signUp: signUpReducer,
	chats: chatsReducer,
	messages: messagesReducer,
	users: usersReducer,
	search: searchReducer,
});
