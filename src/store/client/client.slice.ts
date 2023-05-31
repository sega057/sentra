import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ClientState {
	username: string | undefined;
	idToken: string | undefined;
	refreshToken: string | undefined;
}

const initialState: ClientState = {
	username: undefined,
	idToken: undefined,
	refreshToken: undefined,
};

export const clientSlice = createSlice({
	name: "client",
	initialState,
	reducers: {
		signIn: (state, { payload }: PayloadAction<Required<ClientState>>) => {
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

export const { signIn, logout } = clientSlice.actions;

export const clientReducer = clientSlice.reducer;
