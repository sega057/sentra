import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {MIN_PASS_LENGTH} from "../../app/envVars";

interface PassChecks {
	lowercase?: true;
	uppercase?: true;
	digit?: true;
	symbol?: true;
}

interface SignupState {
	username: string;
	password: {
		value: string;
		checks: PassChecks;
	},
	repeatPass: string;
	isPasswordsEq: boolean;
}

const initialState: SignupState = {
	username: "",
	password: {
		value: "",
		checks: {},
	},
	repeatPass: "",
	isPasswordsEq: false,
};

const validatePass = (password: string): PassChecks => {
	const errors: PassChecks = {};

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
}

export const signUpSlice = createSlice({
	name: "signup",
	initialState,
	reducers: {
		setLogin: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setPassword: (state, {payload}: PayloadAction<string>) => {
			state.password.value = payload;
			state.password.checks = validatePass(payload);
			if (payload.length >= MIN_PASS_LENGTH) {
				state.isPasswordsEq = state.repeatPass === payload;
			} else {
				state.isPasswordsEq = false;
			}
		},
		setRepeatPass: (state, {payload}: PayloadAction<string>) => {
			state.repeatPass = payload;
			if (payload.length >= MIN_PASS_LENGTH) {
				state.isPasswordsEq = state.password.value === payload;
			} else {
				state.isPasswordsEq = false;
			}
		},
	}
});

export const {setLogin, setPassword, setRepeatPass} = signUpSlice.actions;

export const signup = {
	select: <T extends keyof SignupState>(selector: T) => (state: RootState): SignupState[T] => state.signup[selector],
	selectPass: (state: RootState) => state.signup.password.value,
	selectPassChecks: (state: RootState) => state.signup.password.checks,
}

export const signUpReducer = signUpSlice.reducer;