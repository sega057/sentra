import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/use-app";
import {loggedIn} from "../../../store/user/user.slice";
import {setLogin} from "../../../store/sign-up/sign-up.slice";
import {LoginForm} from "../../../components/forms";
import {SubmitBtn} from "../../../components/buttons";
import {NewPasswordForm} from "./new-pass-form";
import {RepeatPasswordForm} from "./repeat-pass-form";

export const SignUpPage: React.FC = () => {
	// const navigate = useNavigate();
	const {username} =
		useAppSelector((state) => state.signup);
	const dispatch = useAppDispatch();

	const setLoginDispatch = (login: string) => dispatch(setLogin(login));

	// const isDataValid = (): boolean => {
	// 	const isPassValid = password.value.length >= 6
	// 		&& Object.values(password.checks).every(val => val === true);
	//
	// 	return username.length >= 4 && isPassValid && isPasswordsEq;
	// }

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// if (password === "12341234" && sign-in === "admin") {
		// 	dispatch(loggedIn(sign-in));
		// 	navigate("/");
		// } else {
		// 	window.alert("Some error happened");
		// }
	}

	return <>
		<h1>Sign up</h1>
		<p className="sub-title">Sign up to get best social media!</p>
		<form className="form" onSubmit={handleSubmit}>
			<LoginForm boolDot={username.length < 4} login={username} setLogin={setLoginDispatch} />
			<NewPasswordForm />
			<RepeatPasswordForm />
			<div className="btn-container">
				<Link to="/login">Already have account?</Link>
			</div>
			<SubmitBtn text="Sign up" />
		</form>
	</>
}

