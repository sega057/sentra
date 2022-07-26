import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {loggedIn} from "../user/userSlice";
import {setLogin} from "./signUpSlice";
import {LoginForm} from "../../components/loginForm";
import {BtnSubmit} from "../../components/btnSubmit";
import {NewPasswordForm} from "./newPassForm";
import {RepeatPasswordForm} from "./repeatPassForm";

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
		// if (password === "12341234" && login === "admin") {
		// 	dispatch(loggedIn(login));
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
			<BtnSubmit text="Sign up" />
		</form>
	</>
}

