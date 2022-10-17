import React from "react";
import { useAppDispatch, useAppSelector } from "@src/hooks/use-app";
import { setRepeatPass } from "@src/store/sign-up/sign-up.slice";
import { PasswordField } from "@components/forms";
import { FormBoolDot } from "@components/bool-dot/form-bool-dot";

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
			onChange={handlePassChange}
			name="repeat password"
			placeholder="Repeat password"
			paddingRight="pr-16"
		>
			<FormBoolDot isValid={isPasswordsEq} rightClass="right-12" />
		</PasswordField>
	);
};
