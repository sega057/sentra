import React from "react";
import { ThemeField } from "@components/forms/index";
import { FormBoolDot } from "@components/bool-dot/form-bool-dot";
import { MIN_USERNAME_LENGTH } from "@src/utils/constants/env-vars";

interface UsernameFieldProps {
	username: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isValid?: null | boolean;
}

type InputProps = Partial<
	Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">
>;

export const UsernameField: React.FC<UsernameFieldProps & InputProps> = ({
	username,
	onChange,
	isValid,
	...rest
}) => {
	return (
		<ThemeField
			required
			type="text"
			name="username"
			placeholder="Username"
			minLength={MIN_USERNAME_LENGTH}
			value={username}
			onChange={onChange}
			{...rest}
		>
			{isValid !== undefined && <FormBoolDot isValid={isValid} />}
		</ThemeField>
	);
};
