import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { MIN_PASS_LENGTH } from "../../utils/constants/env-vars";

interface PassChecks {
	lowercase: boolean;
	uppercase: boolean;
	digit: boolean;
	symbol: boolean;
}

interface SignUpState {
	username: string;
	password: {
		value: string;
		checks: PassChecks;
	};
	repeatPass: string;
	isPasswordsEq: boolean;
}

const initialState: SignUpState = {
	username: "",
	password: {
		value: "",
		checks: {
			lowercase: false,
			uppercase: false,
			digit: false,
			symbol: false,
		},
	},
	repeatPass: "",
	isPasswordsEq: false,
};

const validatePass = (password: string): PassChecks => {
	const errors: PassChecks = {
		lowercase: false,
		uppercase: false,
		digit: false,
		symbol: false,
	};

	if (/[a-z]/g.test(password)) {
		errors.lowercase = true;
	}
	if (/[A-Z]/.test(password)) {
		errors.uppercase = true;
	}
	if (/[0-9]/.test(password)) {
		errors.digit = true;
	}
	if (/[!@#$%^&*(){}[:;<>,.?/\\~_+=|\]-]/.test(password)) {
		errors.symbol = true;
	}

	return errors;
};

export const signUpSlice = createSlice({
	name: "signup",
	initialState,
	reducers: {
		setLogin: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setPassword: (state, { payload }: PayloadAction<string>) => {
			state.password.value = payload;
			state.password.checks = validatePass(payload);
			if (payload.length >= MIN_PASS_LENGTH) {
				state.isPasswordsEq = state.repeatPass === payload;
			} else {
				state.isPasswordsEq = false;
			}
		},
		setRepeatPass: (state, { payload }: PayloadAction<string>) => {
			state.repeatPass = payload;
			if (payload.length >= MIN_PASS_LENGTH) {
				state.isPasswordsEq = state.password.value === payload;
			} else {
				state.isPasswordsEq = false;
			}
		},
	},
});

export const { setLogin, setPassword, setRepeatPass } = signUpSlice.actions;

export const signup = {
	select:
		<T extends keyof SignUpState>(key: T) =>
		(state: RootState): SignUpState[T] =>
			state.signup[key],
	selectPass: (state: RootState) => state.signup.password.value,
	selectPassChecks: (state: RootState) => state.signup.password.checks,
};

export const signUpReducer = signUpSlice.reducer;
