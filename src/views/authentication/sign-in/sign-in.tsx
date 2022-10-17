import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Auth } from "@aws-amplify/auth";
import { useAppDispatch } from "@src/hooks/use-app";
import { loggedIn } from "@src/store/user/user.slice";
import { useInput } from "@src/hooks/use-input";
import { PasswordField, UsernameField } from "@components/forms";
import { SubmitBtn } from "@components/buttons";
import { SignInNotification } from "@components/notifications/sign-in-notification";
import { validateUsername } from "@src/utils/helpers/validators";

export const SignInPage: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { value: password, onChange: handlePassChange } = useInput();
	const { value: username, onChange: handleUsernameChange } =
		useInput(validateUsername);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const user = await Auth.signIn(username, password);
			const {
				signInUserSession: {
					idToken: { jwtToken: idToken },
					refreshToken: { token: refreshToken },
				},
			} = user;

			dispatch(
				loggedIn({
					username: user.username,
					idToken,
					refreshToken,
				}),
			);
			navigate("/");
		} catch (error) {
			console.log("error signing in", error);
		}
	};

	return (
		<>
			<h1 className="mb-10 font-secondary text-6xl text-theme-reverse">
				Sign in
			</h1>
			<p className="mb-9 text-theme-reverse">
				Sign in and start communicating!
			</p>
			<SignInNotification />
			<form className="w-full" onSubmit={handleSubmit}>
				<UsernameField
					username={username}
					onChange={handleUsernameChange}
				/>
				<PasswordField
					password={password}
					onChange={handlePassChange}
				/>
				<div className="mb-5 flex justify-between">
					<Link className="text-theme-reverse" to="/signup">
						Sign up
					</Link>
					<Link
						className="text-theme-reverse dark:text-green-600"
						to="/password_reset"
					>
						Forgot password?
					</Link>
				</div>
				<SubmitBtn>Login</SubmitBtn>
			</form>
		</>
	);
};
