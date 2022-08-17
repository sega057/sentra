import React from "react";
import { Routes, Navigate } from "react-router-dom";
import { Route } from "react-router";
import { PrivateRoute } from "@components/routing/private-route";
import { SignInPage } from "./views/authentication/sign-in/sign-in";
import { SignUpPage } from "./views/authentication/sign-up/sign-up";
import { MainPage } from "./views/chat/main/layout";
import { AuthPageWrapper } from "@components/auth-page-wrapper/auth-page-wrapper";

export const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<PrivateRoute />}>
				<Route index element={<MainPage />} />
			</Route>
			<Route element={<AuthPageWrapper />}>
				<Route path="login" element={<SignInPage />} />
				<Route path="signup" element={<SignUpPage />} />
			</Route>
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};
