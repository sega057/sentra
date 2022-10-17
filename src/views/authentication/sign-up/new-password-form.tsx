import React from "react";
import { useAppDispatch, useAppSelector } from "@src/hooks/use-app";
import {
	setPassword,
	validatePassword,
} from "@src/store/sign-up/sign-up.slice";
import { PasswordField } from "@components/forms";
import { BoolDot } from "@components/bool-dot/bool-dot";
import { MIN_PASS_LENGTH } from "@src/utils/constants/env-vars";

export const NewPasswordForm = () => {
	const {
		value: password,
		checks,
		isValid,
	} = useAppSelector((state) => state.signUp.password);
	const dispatch = useAppDispatch();

	function validatePasswordSymbols(password: string) {
		return password.replace(
			/[^а-яa-zA-Z0-9!@#$%^&*(){}[:;<>,.?/\\~_+=|\]-]/g,
			"",
		);
	}

	const handleChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const password = validatePasswordSymbols(e.target.value);
			dispatch(setPassword(password));
		},
		[dispatch],
	);

	const handleBlur = React.useCallback(() => {
		dispatch(validatePassword());
	}, [dispatch]);

	return (
		<>
			<div>
				<PasswordField
					password={password}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{isValid === false && (
					<p className="-mt-6 mb-1 text-sm text-red-600">
						Password does not meet all requirements
					</p>
				)}
			</div>
			<div className="mb-8 text-sm">
				<p className="font-medium text-theme-reverse">
					Password must be longer than {MIN_PASS_LENGTH} characters
					and contain:
				</p>
				<div className="mt-2 text-theme-reverse">
					<BoolDot isValid={checks.lowercase} />
					<span className="ml-2.5">Lowercase letter (a-z)</span>
				</div>
				<div className="mt-2 text-theme-reverse">
					<BoolDot isValid={checks.uppercase} />
					<span className="ml-2.5">Uppercase letter (A-Z)</span>
				</div>
				<div className="mt-2 text-theme-reverse">
					<BoolDot isValid={checks.digit} />
					<span className="ml-2.5">Digit (0-9)</span>
				</div>
				<div className="mt-2 text-theme-reverse">
					<BoolDot isValid={checks.symbol} />
					<span className="ml-2.5">Symbol (!@#...)</span>
				</div>
			</div>
		</>
	);
};
