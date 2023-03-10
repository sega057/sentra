import React, { InputHTMLAttributes } from "react";
import { MIN_PASS_LENGTH } from "@src/utils/constants/env-vars";
import { EyeToggle } from "../eye-toggle/eye-toggle";
import { ThemeField } from "@components/forms/index";

interface PasswordFieldProps {
	password: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	paddingRight?: string;
}

type InputProps = Partial<
	Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">
>;

export const PasswordField: React.FC<PasswordFieldProps & InputProps> =
	React.memo(({ password, onChange, paddingRight, children, ...rest }) => {
		const [isShown, setShow] = React.useState(false);

		const handleShow = () => {
			setShow((prev) => !prev);
		};

		return (
			<ThemeField
				paddingRight={paddingRight ?? "pr-11"}
				required
				type={isShown ? "text" : "password"}
				name="password"
				placeholder="Password"
				minLength={MIN_PASS_LENGTH}
				value={password}
				onChange={onChange}
				{...rest}
			>
				{children}
				<EyeToggle isOpened={isShown} onClick={handleShow} />
			</ThemeField>
		);
	});

PasswordField.displayName = "PasswordField";
