import React from "react";
import {Routes, Navigate} from "react-router-dom";
import {Route} from "react-router";
import {PrivateRoute} from "./router/privateRoute";
import {SignInPage} from "./pages/login/signIn";
import {SignUpPage} from "./features/signup/signUp";
import {ThemeBtn} from "./components/themeBtn/themeBtn";
import {MainPage} from "./pages/main/layout";
import {AuthPage} from "./pages/authWrapper/auth";

export const App: React.FC = () => {
	return <>
		<Routes>
			<Route path="/" element={<PrivateRoute/>}>
				<Route index element={<MainPage/>}/>
			</Route>
			<Route element={<AuthPage/>}>
				<Route path="login" element={<SignInPage />} />
				<Route path="signup" element={<SignUpPage />} />
			</Route>
			<Route path="*" element={<Navigate to="/" replace />}/>
		</Routes>
		<ThemeBtn/>
	</>;
}
