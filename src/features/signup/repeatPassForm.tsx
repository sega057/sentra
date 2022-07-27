import React from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setRepeatPass, signup} from "./signUpSlice";
import {PasswordForm} from "../../components/passwordForm";

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
		isValid={!isPassEqual}
		name="repeat password"
		placeholder="Repeat password"
	/>
}