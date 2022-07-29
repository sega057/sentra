import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-app";
import { setPassword, signup } from "../../../store/sign-up/sign-up.slice";
import { PasswordForm } from "../../../components/forms";
import { BoolDot } from "../../../components/bool-dot/bool-dot";
import "./new-pass-form.scss";

export const NewPasswordForm = () => {
	const password = useAppSelector(signup.selectPass);
	const errors = useAppSelector(signup.selectPassChecks);
	const dispatch = useAppDispatch();

	const handleChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			dispatch(setPassword(e.target.value));
		},
		[dispatch],
	);

	return (
		<div className="form-wrapper">
			<PasswordForm password={password} handleChange={handleChange} />
			<div className="requirements">
				<p>Password must be longer than 6 characters and contain:</p>
				<div>
					<BoolDot isRed={errors.lowercase} />
					<span>Lowercase letter (a-z)</span>
				</div>
				<div>
					<BoolDot isRed={errors.uppercase} />
					<span>Uppercase letter (A-Z)</span>
				</div>
				<div>
					<BoolDot isRed={errors.digit} />
					<span>Digit (0-9)</span>
				</div>
				<div>
					<BoolDot isRed={errors.symbol} />
					<span>Symbol (!@#)</span>
				</div>
			</div>
		</div>
	);
};
