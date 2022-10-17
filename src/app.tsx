import React from "react";
import "./assets/authentication";
import { Routes, Navigate, Route } from "react-router";
import { PrivateRoute } from "@components/routing/private-route";
import { SignInPage } from "./views/authentication/sign-in/sign-in";
import { SignUpPage } from "./views/authentication/sign-up/sign-up";
import { ChatWrapper } from "./views/chat/chat-wrapper";
import { AuthPageWrapper } from "@components/auth-page-wrapper/auth-page-wrapper";
import { ChatMainPage } from "@src/views/chat/pages/chat-main";
import { ChatSettingsPage } from "@src/views/chat/pages/chat-settings";

export const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<PrivateRoute />}>
				<Route element={<ChatWrapper />}>
					<Route index element={<ChatMainPage />} />
					<Route path="settings" element={<ChatSettingsPage />} />
				</Route>
			</Route>
			<Route element={<AuthPageWrapper />}>
				<Route path="login" element={<SignInPage />} />
				<Route path="signup" element={<SignUpPage />} />
			</Route>
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};
