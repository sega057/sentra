import * as React from "react";
import { Outlet } from "react-router-dom";
import { LogoutBtn } from "../../../components/buttons";

export const MainPage = () => {
	return (
		<>
			<h1>Main app</h1>
			<LogoutBtn />
			<Outlet />
		</>
	);
};
