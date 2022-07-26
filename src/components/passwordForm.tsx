import React, {InputHTMLAttributes} from "react";
import {MIN_PASS_LENGTH} from "../app/envVars";

interface PasswordFormProps {
	password: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isValid?: boolean;
}

type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">>;

export const PasswordForm: React.FC<PasswordFormProps & InputProps> = ({password, handleChange, isValid, ...rest}) => {
	const [showPass, setShow] = React.useState(false);

	const handleShow = () => {setShow(prev => !prev)};

	return <div className="input-wrapper password">
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
		<span className={`eye${showPass ? " show" : ""}`} onClick={handleShow} />
		{isValid !== undefined && <span className={`bool-dot${isValid ? " required" : ""}`} />}
	</div>
}