import React, {InputHTMLAttributes} from "react";

interface LoginFormProps {
	login: string;
	setLogin: React.Dispatch<string>;
	boolDot?: boolean;
}

type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">>;

export const LoginForm: React.FC<LoginFormProps & InputProps> = ({login, setLogin, boolDot, ...rest}) => {
	function validateLogin(login: string) {
		if (login.length > 20) {
			return login.slice(0, -1);
		}

		return login.replace(/[^a-zA-Z0-9-_.]/g, "");
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLogin(validateLogin(e.target.value));
	}

	return <div className="input-wrapper login">
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
		{boolDot !== undefined && <span className={`bool-dot${boolDot ? " required" : ""}`} />}
	</div>
}