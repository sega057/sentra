import React from "react";
import { ThemeField } from "@components/forms/index";
import { useAppDispatch, useAppSelector } from "@src/hooks/use-app";
import { setEmail, setEmailCheck } from "@src/store/sign-up/sign-up.slice";
import { FormBoolDot } from "@components/bool-dot/form-bool-dot";

export const EmailField = () => {
	const dispatch = useAppDispatch();
	const { email } = useAppSelector((state) => state.signUp);

	const handleChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			dispatch(setEmail(e.target.value));
		},
		[dispatch, setEmail],
	);

	const handleBlur = React.useCallback(
		(e: React.FocusEvent<HTMLInputElement>) => {
			const email = e.target.value;
			if (email.length) {
				dispatch(setEmailCheck(isEmailValid(email)));
			}
		},
		[dispatch],
	);

	function isEmailValid(email: string) {
		return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			email,
		);
	}

	return (
		<ThemeField
			required
			type="email"
			name="email"
			placeholder="Email"
			value={email.value}
			onChange={handleChange}
			onBlur={handleBlur}
		>
			<FormBoolDot isValid={email.isValid} />
		</ThemeField>
	);
};
