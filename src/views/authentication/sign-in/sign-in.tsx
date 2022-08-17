import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/hooks/use-app";
import { useInput } from "@/hooks/use-input";
import { loggedIn } from "@/store/user/user.slice";
import { LoginField, PasswordField } from "@components/forms";
import { SubmitBtn } from "@components/buttons";

export const SignInPage: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [login, setLogin] = React.useState("");
	const { value: password, onChange: handlePassChange } = useInput();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password === "123456" && login === "admin") {
			dispatch(loggedIn(login));
			navigate("/");
		} else {
			window.alert("test auth data: admin | 123456");
		}
	};

	return (
		<>
			<h1 className="mb-10 font-secondary text-6xl">Sign in</h1>
			<p className="mb-9">Sign in and start communicating!</p>
			<form className="w-full max-w-xs" onSubmit={handleSubmit}>
				<LoginField {...{ login, setLogin }} />
				<PasswordField
					password={password}
					handleChange={handlePassChange}
				/>
				<div className="mb-5 flex justify-between">
					<Link className="text-theme-reverse" to="/signup">
						Sign up
					</Link>
					<Link className="text-theme-reverse" to="/password_reset">
						Forgot password?
					</Link>
				</div>
				<SubmitBtn>Login</SubmitBtn>
			</form>
		</>
	);
};
