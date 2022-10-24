import React from "react";
import { Link, createSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { Auth } from "@aws-amplify/auth";
import { useAppDispatch, useAppSelector } from "@src/hooks/use-app";
import { flushSingUp, setUsername } from "@src/store/sign-up/sign-up.slice";
import { UsernameField } from "@components/forms";
import { SubmitBtn } from "@components/buttons";
import { NewPasswordForm } from "./new-password-form";
import { RepeatPasswordField } from "./repeat-password-field";
import { EmailField } from "@components/forms/email-field";
import { MIN_USERNAME_LENGTH } from "@src/utils/constants/env-vars";
import { validateUsername } from "@src/utils/helpers/validators";

export const SignUpPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { username, email, password, isPasswordsEq } = useAppSelector(
		(state) => state.signUp,
	);

	const handleUsernameChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			dispatch(setUsername(validateUsername(e.target.value)));
		},
		[dispatch],
	);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!password.isValid || !isPasswordsEq) {
			window.alert("Wrong password data");
			return;
		}

		try {
			const payload = await Auth.signUp({
				username,
				password: password.value,
				attributes: {
					// eslint-disable-next-line camelcase
					preferred_username: username,
					email: email.value,
				},
				// autoSignIn: {
				// 	enabled: true,
				// },
			});
			console.log("payload", payload);
			dispatch(flushSingUp());
			navigate({
				pathname: "/login",
				search: `?${createSearchParams({
					notificationType: "success",
					notificationMessage:
						"Registration completed successfully. Verify your email address by clicking on the link sent to you in the email message.",
				})}`,
			});
		} catch (error) {
			console.log("error signing up:", error);
		}
	};

	return (
		<>
			<h1 className="mb-10 font-secondary text-6xl text-theme-reverse">
				Sign up
			</h1>
			<p className="mb-9 text-theme-reverse">
				Sign up to join modern messenger!
			</p>
			<form className="w-full" onSubmit={handleSubmit}>
				<UsernameField
					isValid={username.length >= MIN_USERNAME_LENGTH}
					username={username}
					onChange={handleUsernameChange}
				/>
				<EmailField />
				<NewPasswordForm />
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
