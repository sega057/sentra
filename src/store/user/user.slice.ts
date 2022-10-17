import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
	username?: string;
	idToken?: string;
	refreshToken?: string;
}

const initialState: UserState = {};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loggedIn: (
			state,
			{ payload }: PayloadAction<Omit<UserState, "isAuth">>,
		) => {
			const { username, idToken, refreshToken } = payload;
			state.username = username;
			state.idToken = idToken;
			state.refreshToken = refreshToken;
		},
		logout: (state) => {
			state.username = undefined;
			state.idToken = undefined;
			state.refreshToken = undefined;
		},
	},
});

export const { loggedIn, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
