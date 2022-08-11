import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-app";
import { setRepeatPass } from "../../../store/sign-up/sign-up.slice";
import { PasswordField } from "../../../components/forms";

export const RepeatPasswordField = () => {
	const { repeatPassword, isPasswordsEq } = useAppSelector(
		(state) => state.signUp,
	);
	const dispatch = useAppDispatch();

	const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setRepeatPass(e.target.value));
	};

	return (
		<PasswordField
			password={repeatPassword}
			handleChange={handlePassChange}
			isValid={!isPasswordsEq}
			name="repeat password"
			placeholder="Repeat password"
		/>
	);
};
