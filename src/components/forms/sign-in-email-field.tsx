import React from "react";
import { EmailField } from "@components/forms/email-field";
import { isEmailValid } from "@src/utils/helpers/validators";

interface SignInEmailFieldProps {
	email: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SignInEmailField: React.FC<SignInEmailFieldProps> = React.memo(
	({ email, onChange }) => {
		const [isValid, setValid] = React.useState<null | boolean>(null);

		const handleBlur = React.useCallback(
			(e: React.FocusEvent<HTMLInputElement>) => {
				const email = e.target.value;

				setValid(email.length ? isEmailValid(email) : null);
			},
			[setValid],
		);

		return (
			<EmailField
				email={email}
				onChange={onChange}
				onBlur={handleBlur}
				isValid={isValid}
			/>
		);
	},
);

SignInEmailField.displayName = "SignInEmailField";
