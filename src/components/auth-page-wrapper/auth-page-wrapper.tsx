import React from "react";
import { Logo } from "../logo/logo";
import { Outlet } from "react-router-dom";
import { BottomDecor } from "../bottom-decor/bottom-decor";
import "./auth-page-wrapper.scss";

export const AuthPageWrapper: React.FC = () => {
	return (
		<main className="main auth">
			<Logo />
			<div className="container">
				<Outlet />
			</div>
			<BottomDecor />
		</main>
	);
};
