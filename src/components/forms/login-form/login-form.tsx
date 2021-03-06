import React from "react";
import { BoolDot } from "../../bool-dot/bool-dot";

interface LoginFormProps {
	login: string;
	setLogin: React.Dispatch<string>;
	isValid?: boolean;
}

type InputProps = Partial<
	Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">
>;

export const LoginForm: React.FC<LoginFormProps & InputProps> = ({
	login,
	setLogin,
	isValid,
	...rest
}) => {
	function validateLogin(login: string) {
		if (login.length > 20) {
			return login.slice(0, -1);
		}

		return login.replace(/[^a-zA-Z0-9-_.]/g, "");
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLogin(validateLogin(e.target.value));
	};

	return (
		<div className="input-wrapper login">
			<input
				required
				className="form-control"
				type="text"
				name="login"
				placeholder="Login"
				minLength={4}
				value={login}
				onChange={handleChange}
				{...rest}
			/>
			{isValid !== undefined && <BoolDot isRed={isValid} />}
		</div>
	);
};
