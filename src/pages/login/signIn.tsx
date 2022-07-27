import React from "react";
import {useNavigate} from "react-router";
import {useAppDispatch} from "../../app/hooks";
import {loggedIn} from "../../features/user/userSlice";
import {Link} from "react-router-dom";
import {LoginForm} from "../../components/loginForm";
import {PasswordForm} from "../../components/passwordForm";
import {BtnSubmit} from "../../components/btnSubmit";
import {useInput} from "../../app/hooks";

export const SignInPage: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [login, setLogin] = React.useState("");
	const {value: password, onChange: handlePassChange} = useInput();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password === "12341234" && login === "admin") {
			dispatch(loggedIn(login));
			navigate("/");
		} else {
			window.alert("wrong auth data");
		}
	}

	return <>
		<h1>Sign in</h1>
		<p className="sub-title">Sign in and start communicating!</p>
		<form className="form" onSubmit={handleSubmit}>
			<LoginForm {...{login, setLogin}} />
			<PasswordForm {...{password, handleChange: handlePassChange}} />
			<div className="btn-container">
				<Link to="/signup">Sign up</Link>
				<Link to="/password_reset">Forgot password?</Link>
			</div>
			<BtnSubmit text="Login"/>
		</form>
	</>
}

