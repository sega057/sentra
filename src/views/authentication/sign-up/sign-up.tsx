import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-app";
import { setLogin } from "../../../store/sign-up/sign-up.slice";
import { LoginForm } from "../../../components/forms";
import { SubmitBtn } from "../../../components/buttons";
import { NewPasswordForm } from "./new-pass-form";
import { RepeatPasswordForm } from "./repeat-pass-form";
import "../authentication.scss";

export const SignUpPage = () => {
	// const navigate = useNavigate();
	const { username } = useAppSelector((state) => state.signup);
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
	};

	return (
		<>
			<h1 className="title">Sign up</h1>
			<p className="sub-title">Sign up to join best social media!</p>
			<form className="form" onSubmit={handleSubmit}>
				<LoginForm
					isValid={username.length < 4}
					login={username}
					setLogin={setLoginDispatch}
				/>
				<NewPasswordForm />
				<RepeatPasswordForm />
				<div className="btn-container">
					<Link className="btn inline" to="/login">
						Already have account?
					</Link>
				</div>
				<SubmitBtn>Sign up</SubmitBtn>
			</form>
		</>
	);
};
