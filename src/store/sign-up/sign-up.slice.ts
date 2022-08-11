import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
	repeatPassword: string;
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
	repeatPassword: "",
	isPasswordsEq: false,
};

const validatePass = (password: string): PassChecks => {
	const checks: PassChecks = {
		lowercase: false,
		uppercase: false,
		digit: false,
		symbol: false,
	};

	if (/[a-z]/g.test(password)) {
		checks.lowercase = true;
	}
	if (/[A-Z]/.test(password)) {
		checks.uppercase = true;
	}
	if (/[0-9]/.test(password)) {
		checks.digit = true;
	}
	if (/[!@#$%^&*(){}[:;<>,.?/\\~_+=|\]-]/.test(password)) {
		checks.symbol = true;
	}

	return checks;
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
				state.isPasswordsEq = state.repeatPassword === payload;
			} else {
				state.isPasswordsEq = false;
			}
		},
		setRepeatPass: (state, { payload }: PayloadAction<string>) => {
			state.repeatPassword = payload;
			if (payload.length >= MIN_PASS_LENGTH) {
				state.isPasswordsEq = state.password.value === payload;
			} else {
				state.isPasswordsEq = false;
			}
		},
	},
});

export const { setLogin, setPassword, setRepeatPass } = signUpSlice.actions;
export const signUpReducer = signUpSlice.reducer;
