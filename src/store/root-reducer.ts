import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.slice";
import { signUpReducer } from "./sign-up/sign-up.slice";
import { chatsReducer } from "./chats/chats.slice";
import { messagesReducer } from "./messages/messages.slice";
import { contactsReducer } from "./contacts/contacts.slice";

export const rootReducer = combineReducers({
	user: userReducer,
	signUp: signUpReducer,
	chats: chatsReducer,
	messages: messagesReducer,
	contacts: contactsReducer,
});
