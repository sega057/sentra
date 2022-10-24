import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
	username?: string;
	idToken?: string;
	refreshToken?: string;
}

const initialState: UserState = {};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		signIn: (state, { payload }: PayloadAction<Required<UserState>>) => {
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

export const { signIn, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
