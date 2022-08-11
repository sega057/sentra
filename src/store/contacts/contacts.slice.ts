import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "./types";

interface ContactsState {
	contacts: Array<Contact>;
	openedContact?: Contact;
}

const initialState: ContactsState = mockContacts();
// const initialState: ContactsState = {
// 	contacts: [],
// };

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		setInitialContacts(state, action: PayloadAction<Array<Contact>>) {
			state.contacts = action.payload;
		},
		addLoadedContacts(state, action: PayloadAction<Array<Contact>>) {
			state.contacts.push(...action.payload);
		},
		setOpenedContact(state, action: PayloadAction<Contact | undefined>) {
			state.openedContact = action.payload;
		},
	},
});

export const contactsReducer = contactsSlice.reducer;

function mockContacts(): ContactsState {
	return {
		contacts: [
			{
				userId: 0,
				firstName: "Serhii",
				username: "sega057",
			},
			{
				userId: 1,
				firstName: "Mike",
				username: "joyer1",
				bio: "Sportsman",
			},
			{
				userId: 2,
				firstName: "Angela",
				username: "angel_ny",
				bio: "Beauty fairy",
			},
			{
				userId: 3,
				firstName: "Mikhael",
				lastName: "Malvarez",
				username: "Lemon_Morris",
				bio: "BMW lover",
			},
			{
				userId: 4,
				firstName: "Dan",
				username: "dan_01",
				bio: "Strive to excellence",
			},
		],
		openedContact: undefined,
	};
}
