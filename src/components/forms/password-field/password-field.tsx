import React, { InputHTMLAttributes } from "react";
import { MIN_PASS_LENGTH } from "../../../utils/constants/env-vars";
import { BoolDot } from "../../bool-dot/bool-dot";
import { EyeToggle } from "../../eye-toggle/eye-toggle";
import { AuthField } from "../auth-field/auth-field";

interface PasswordFieldProps {
	password: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isValid?: boolean;
}

type InputProps = Partial<
	Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">
>;

export const PasswordField: React.FC<PasswordFieldProps & InputProps> = ({
	password,
	handleChange,
	isValid,
	...rest
}) => {
	const [showPass, setShow] = React.useState(false);

	const handleShow = () => {
		setShow((prev) => !prev);
	};

	return (
		<AuthField
			required
			type={showPass ? "text" : "password"}
			name="password"
			placeholder="Password"
			minLength={MIN_PASS_LENGTH}
			value={password}
			onChange={handleChange}
			{...rest}
		>
			{isValid !== undefined && <BoolDot isRed={isValid} inPassForm />}
			<EyeToggle isOpened={showPass} onClick={handleShow} />
		</AuthField>
	);
};
