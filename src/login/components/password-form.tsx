import React, {InputHTMLAttributes} from "react";

interface PasswordFormProps {
	password: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	boolDot?: boolean;
}

type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">>;

export const PasswordForm: React.FC<PasswordFormProps & InputProps> = ({password, handleChange, boolDot, ...rest}) => {
	const [showPass, setShow] = React.useState(false);

	const handleShow = () => {setShow(prev => !prev)};

	return <div className="input-wrapper password">
		<input
			required
			className="form-control"
			type={showPass ? "text" : "password"}
			name="password"
			placeholder="Password"
			minLength={6}
			value={password}
			onChange={handleChange}
			{...rest}
		/>
		<span className={`eye${showPass ? " show" : ""}`} onClick={handleShow} />
		{boolDot !== undefined && <span className={`bool-dot${boolDot ? " required" : ""}`} />}
	</div>
}