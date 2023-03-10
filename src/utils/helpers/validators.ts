import { PassChecks } from "@src/store/sign-up/sign-up.slice";

export function validateUsername(username: string) {
	let result = username.replace(/[^a-zA-Z0-9-_.@]/g, "");
	if (result.length > 20) {
		result = result.slice(0, 20);
	}
	return result;
}

export function isEmailValid(email: string) {
	return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
		email,
	);
}

export function replaceInvalidPasswordSymbols(password: string) {
	return password.replace(
		/[^а-яa-zA-Z0-9!@#$%^&*(){}[:;<>,.?/\\~_+=|\]-]/g,
		"",
	);
}

export function validatePassword(password: string): PassChecks {
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
}
