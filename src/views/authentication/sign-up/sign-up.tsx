import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/use-app";
import { setLogin } from "@/store/sign-up/sign-up.slice";
import { LoginField } from "@components/forms";
import { SubmitBtn } from "@components/buttons";
import { NewPasswordField } from "./new-password-field";
import { RepeatPasswordField } from "./repeat-password-field";

export const SignUpPage = () => {
	// const navigate = useNavigate();
	const { username } = useAppSelector((state) => state.signUp);
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
			<h1 className="mb-10 font-secondary text-6xl">Sign up</h1>
			<p className="mb-9">Sign up to join best social media!</p>
			<form className="w-full max-w-xs" onSubmit={handleSubmit}>
				<LoginField
					isValid={username.length < 4}
					login={username}
					setLogin={setLoginDispatch}
				/>
				<NewPasswordField />
				<RepeatPasswordField />
				<Link
					className="mb-5 inline-block text-theme-reverse"
					to="/login"
				>
					Already have account?
				</Link>
				<SubmitBtn>Sign up</SubmitBtn>
			</form>
		</>
	);
};
