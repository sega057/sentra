import React from "react";
import {Logo} from "../../components/logo/logo";
import {Outlet} from "react-router-dom";
import {BottomDecor} from "./bottom-decor/bottomDecor";
import "./auth.scss";

export const AuthPage: React.FC = () => {
	return <main className="main auth">
		<Logo />
		<div className="container">
			<Outlet/>
		</div>
		<BottomDecor />
	</main>;
}

