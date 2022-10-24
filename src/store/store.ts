import { ThunkAction, Action, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import socketMiddleware from "@src/middlewares/websocket";
import { SocketClient } from "@src/api/socket-client";

const socket = new SocketClient();

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware(),
		socketMiddleware(socket),
	],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
