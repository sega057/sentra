import React from "react";
import {Routes, Navigate, BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import {PrivateRoute} from "./components/routing/private-route";
import {SignInPage} from "./views/authentication/sign-in/sign-in";
import {SignUpPage} from "./views/authentication/sign-up/sign-up";
import {ThemeBtn} from "./components/buttons";
import {MainPage} from "./views/chat/main/layout";
import {AuthPage} from "./components/auth-wrapper/auth";

export const App: React.FC = () => {
	return <BrowserRouter>
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
	</BrowserRouter>;
}
