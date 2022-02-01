import React from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setRepeatPass, signup} from "../../features/signup/signup-slice";
import {PasswordForm} from "../components/password-form";

export const RepeatPasswordForm = () => {
	const repeatPassword = useAppSelector(signup.select("repeatPass"));
	const isPassEqual = useAppSelector(signup.select("isPasswordsEq"));
	const dispatch = useAppDispatch();

	const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setRepeatPass(e.target.value));
	}

	return <PasswordForm
		password={repeatPassword}
		handleChange={handlePassChange}
		boolDot={!isPassEqual}
		name="repeat password"
		placeholder="Repeat password"
	/>
}