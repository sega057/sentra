import React from "react";
import { Routes, Navigate, Route } from "react-router";
import { PrivateRoute } from "@components/routing/private-route";
import { SignInPage } from "./views/authentication/sign-in/sign-in";
import { SignUpPage } from "./views/authentication/sign-up/sign-up";
import { ChatPage } from "./views/chat/main/layout";
import { AuthPageWrapper } from "@components/auth-page-wrapper/auth-page-wrapper";
import { ThemeField } from "@components/forms";
import { ChatsList } from "@components/layouts/chats-list/chats-list";
import { ChatContainer } from "@components/chat-content-container/chat-container";
import { ChatDetailsWrapper } from "@components/layouts/chat-details/chat-details-wrapper";

export const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<PrivateRoute />}>
				<Route element={<ChatPage />}>
					<Route
						index
						element={
							<ChatContainer
								leftCol={
									<>
										<ThemeField
											wrapperClassName="mx-10 my-5"
											placeholder="Search..."
										/>
										<ChatsList />
									</>
								}
								rightCol={<ChatDetailsWrapper />}
							/>
						}
					/>
					<Route
						path="config"
						element={
							<ChatContainer
								leftCol={
									<>
										<ThemeField
											wrapperClassName="mx-10 my-5"
											placeholder="Search..."
										/>
										Configurations list
									</>
								}
							/>
						}
					/>
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
