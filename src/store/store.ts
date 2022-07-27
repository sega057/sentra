import {ThunkAction, Action, createStore} from '@reduxjs/toolkit';
import {rootReducer} from "./root-reducer";

export const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppdThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
