import React, { InputHTMLAttributes } from "react";
import { MIN_PASS_LENGTH } from "../../../utils/constants/env-vars";
import { BoolDot } from "../../bool-dot/bool-dot";
import { EyeToggle } from "../../eye-toggle/eye-toggle";
import "./password-form.scss";

interface PasswordFormProps {
	password: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isValid?: boolean;
}

type InputProps = Partial<
	Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">
>;

export const PasswordForm: React.FC<PasswordFormProps & InputProps> = ({
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
		<div className="input-wrapper password">
			<input
				required
				className="form-control"
				type={showPass ? "text" : "password"}
				name="password"
				placeholder="Password"
				minLength={MIN_PASS_LENGTH}
				value={password}
				onChange={handleChange}
				{...rest}
			/>
			{isValid !== undefined && <BoolDot isRed={isValid} />}
			<EyeToggle isOpened={showPass} onClick={handleShow} />
		</div>
	);
};
