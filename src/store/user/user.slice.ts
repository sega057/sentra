import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
	username?: string;
	isAuth: boolean;
}

const initialState: UserState = {
	isAuth: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loggedIn: (state, action: PayloadAction<string>) => {
			state.isAuth = true;
			state.username = action.payload;
		},
		logout: (state) => {
			state.isAuth = false;
			delete state.username;
		},
	},
});

export const { loggedIn, logout } = userSlice.actions;
export const selectAuth = (state: RootState) => state.user.isAuth;

export const userReducer = userSlice.reducer;
