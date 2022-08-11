import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-app";
import { setPassword } from "../../../store/sign-up/sign-up.slice";
import { PasswordField } from "../../../components/forms";
import { BoolDot } from "../../../components/bool-dot/bool-dot";

export const NewPasswordField = () => {
	const { value: password, checks } = useAppSelector(
		(state) => state.signUp.password,
	);
	const dispatch = useAppDispatch();

	const handleChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			dispatch(setPassword(e.target.value));
		},
		[dispatch],
	);

	return (
		<>
			<PasswordField password={password} handleChange={handleChange} />
			<div className="mb-8 text-sm">
				<p className="font-medium">
					Password must be longer than 6 characters and contain:
				</p>
				<div className="mt-2">
					<BoolDot isRed={!checks.lowercase} />
					<span className="ml-2.5">Lowercase letter (a-z)</span>
				</div>
				<div className="mt-2">
					<BoolDot isRed={!checks.uppercase} />
					<span className="ml-2.5">Uppercase letter (A-Z)</span>
				</div>
				<div className="mt-2">
					<BoolDot isRed={!checks.digit} />
					<span className="ml-2.5">Digit (0-9)</span>
				</div>
				<div className="mt-2">
					<BoolDot isRed={!checks.symbol} />
					<span className="ml-2.5">Symbol (!@#)</span>
				</div>
			</div>
		</>
	);
};
