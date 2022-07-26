import React from "react";
import {Logo} from "../../components/logo/logo";
import {BottomDecor} from "./components/bottom-decor/bottom-decor";
import "./auth.scss";

export const AuthPage: React.FC = ({children}) => {
	return <main className="main auth">
		<Logo />
		<div className="container">
			{children}
		</div>
		<BottomDecor />
	</main>;
}

