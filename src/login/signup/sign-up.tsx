import React from "react";
import {useNavigate} from "react-router";
import {loggedIn} from "../../features/user/user-slice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {Link} from "react-router-dom";
import {AuthPage} from "../auth";
import {LoginForm} from "../components/login-form";
import {BtnSubmit} from "../components/btn-submit";
import {NewPasswordForm} from "./new-pass-form";
import {setLogin} from "../../features/signup/signup-slice";
import {RepeatPasswordForm} from "./pass-repeat";

export const SignUpPage: React.FC = () => {
	// const navigate = useNavigate();
	const {username, password, isPasswordsEq} =
		useAppSelector((state) => state.signup);
	const dispatch = useAppDispatch();

	const setLoginDispatch = (login: string) => dispatch(setLogin(login));

	const isDataValid = (): boolean => {
		const isPassValid = password.value.length >= 6
			&& Object.values(password.checks).every(val => val === true);

		return username.length >= 4 && isPassValid && isPasswordsEq;
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// if (password === "12341234" && login === "admin") {
		// 	dispatch(loggedIn(login));
		// 	navigate("/");
		// } else {
		// 	window.alert("Some error happened");
		// }
	}

	return <AuthPage>
		<h1>Sign up</h1>
		<p className="sub-title">Sign up to get best social media!</p>
		<form className="form" onSubmit={handleSubmit}>
			<LoginForm boolDot={username.length < 4} login={username} setLogin={setLoginDispatch} />
			<NewPasswordForm />
			<RepeatPasswordForm />
			<div className="btn-container">
				<Link to="/login">Already have account?</Link>
			</div>
			<BtnSubmit text="Sign up" />
		</form>
	</AuthPage>
}

