import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MIN_PASS_LENGTH } from "@src/utils/constants/env-vars";
import { validatePassword as validatePass } from "@src/utils/helpers/validators";

enum PassCheck {
	lowercase = "lowercase",
	uppercase = "uppercase",
	digit = "digit",
	symbol = "symbol",
}

export type PassChecks = Record<PassCheck, boolean>;

interface SignUpState {
	username: string;
	email: {
		value: string;
		isValid: null | boolean;
	};
	password: {
		value: string;
		checks: PassChecks;
		isValid: null | boolean;
	};
	repeatPassword: string;
	isPasswordsEq: boolean;
}

const initialState: SignUpState = {
	username: "",
	email: {
		value: "",
		isValid: null,
	},
	password: {
		value: "",
		checks: {
			lowercase: false,
			uppercase: false,
			digit: false,
			symbol: false,
		},
		isValid: null,
	},
	repeatPassword: "",
	isPasswordsEq: false,
};

export const signUpSlice = createSlice({
	name: "signup",
	initialState,
	reducers: {
		setUsername: (state, { payload }: PayloadAction<string>) => {
			state.username = payload;
		},
		setEmail: (state, { payload }: PayloadAction<string>) => {
			state.email.value = payload;
			state.email.isValid = null;
		},
		setEmailCheck: (state, { payload }: PayloadAction<boolean>) => {
			state.email.isValid = payload;
		},
		setPassword: (state, { payload }: PayloadAction<string>) => {
			state.password.value = payload;
			state.password.checks = validatePass(payload);
			state.password.isValid = null;
			if (payload.length >= MIN_PASS_LENGTH) {
				state.isPasswordsEq = state.repeatPassword === payload;
			} else {
				state.isPasswordsEq = false;
			}
		},
		validatePassword: (state) => {
			state.password.isValid =
				state.password.value.length >= MIN_PASS_LENGTH &&
				Object.values(state.password.checks).every(Boolean);
		},
		setRepeatPass: (state, { payload }: PayloadAction<string>) => {
			state.repeatPassword = payload;
			if (payload.length >= MIN_PASS_LENGTH) {
				state.isPasswordsEq = state.password.value === payload;
			} else {
				state.isPasswordsEq = false;
			}
		},
		flushSingUp: (state) => {
			Object.assign(state, initialState);
		},
	},
});

export const {
	setUsername,
	setEmail,
	setEmailCheck,
	setPassword,
	validatePassword,
	setRepeatPass,
	flushSingUp,
} = signUpSlice.actions;

export const signUpReducer = signUpSlice.reducer;
