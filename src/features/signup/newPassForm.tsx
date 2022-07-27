import React from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setPassword, signup} from "./signUpSlice";
import {PasswordForm} from "../../components/passwordForm";

export const NewPasswordForm = () => {
	const password = useAppSelector(signup.selectPass);
	const errors = useAppSelector(signup.selectPassChecks);
	const dispatch = useAppDispatch();

	const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setPassword(e.target.value));
	}, [dispatch]);

	return <div className="form-container">
		<PasswordForm password={password} handleChange={handleChange} />
		<div className="requirements">
			<p>Password must be longer than 6 characters and contain:</p>
			<span className={`bool-dot${errors.lowercase ? "" : " required"}`}>Lowercase letter (a-z)</span>
			<span className={`bool-dot${errors.uppercase ? "" : " required"}`}>Uppercase letter (A-Z)</span>
			<span className={`bool-dot${errors.digit ? "" : " required"}`}>Digit (0-9)</span>
			<span className={`bool-dot${errors.symbol ? "" : " required"}`}>Symbol (!@#)</span>
		</div>
	</div>
}