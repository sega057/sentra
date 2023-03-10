import React from "react";
import { ThemeField } from "@components/forms/index";
import { FormBoolDot } from "@components/bool-dot/form-bool-dot";

interface EmailFieldProps {
	email: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isValid?: null | boolean;
}

type InputProps = Partial<
	Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">
>;

export const EmailField: React.FC<EmailFieldProps & InputProps> = ({
	email,
	onChange,
	isValid,
	...rest
}) => {
	return (
		<ThemeField
			required
			type="email"
			name="email"
			placeholder="Email"
			value={email}
			onChange={onChange}
			{...rest}
		>
			{isValid !== undefined && <FormBoolDot isValid={isValid} />}
		</ThemeField>
	);
};
