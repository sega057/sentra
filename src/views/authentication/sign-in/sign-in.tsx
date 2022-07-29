import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/use-app";
import { useInput } from "../../../hooks/use-input";
import { loggedIn } from "../../../store/user/user.slice";
import { LoginForm, PasswordForm } from "../../../components/forms";
import { SubmitBtn } from "../../../components/buttons";
import "../authentication.scss";

export const SignInPage: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [login, setLogin] = React.useState("");
	const { value: password, onChange: handlePassChange } = useInput();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password === "12341234" && login === "admin") {
			dispatch(loggedIn(login));
			navigate("/");
		} else {
			window.alert("wrong auth data");
		}
	};

	return (
		<>
			<h1 className="title">Sign in</h1>
			<p className="sub-title">Sign in and start communicating!</p>
			<form className="form" onSubmit={handleSubmit}>
				<LoginForm {...{ login, setLogin }} />
				<PasswordForm
					password={password}
					handleChange={handlePassChange}
				/>
				<div className="btn-container">
					<Link className="btn inline" to="/signup">
						Sign up
					</Link>
					<Link className="btn inline" to="/password_reset">
						Forgot password?
					</Link>
				</div>
				<SubmitBtn>Login</SubmitBtn>
			</form>
		</>
	);
};
