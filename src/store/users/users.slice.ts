import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types";

interface UsersState {
	users: { [userId: number]: User };
	// openedUserId?: number;
}

const initialState: UsersState = mockUsers();
// const initialState: UsersState = {
// 	users: [],
// };

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addUsers(state, action: PayloadAction<Array<User>>) {
			action.payload.forEach((user) => {
				state.users[user.userId] = user;
			});
		},
	},
});

export const usersReducer = usersSlice.reducer;

function mockUsers(): UsersState {
	return {
		users: {
			0: {
				userId: 0,
				firstName: "Serhii",
				username: "sega057",
			},
			1: {
				userId: 1,
				firstName: "Mike",
				username: "joyer1",
				bio: "Sportsman",
			},
			2: {
				userId: 2,
				firstName: "Angela",
				username: "angel_ny",
				bio: "Beauty fairy",
			},
			3: {
				userId: 3,
				firstName: "Mikhael",
				lastName: "Malvarez",
				username: "Lemon_Morris",
				bio: "BMW lover",
			},
			4: {
				userId: 4,
				firstName: "Dan",
				username: "dan_01",
				bio: "Football player",
			},
		},
	};
}
