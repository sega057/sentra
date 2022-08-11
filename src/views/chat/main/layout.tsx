import * as React from "react";
import { Outlet } from "react-router-dom";
import { LogoutBtn } from "../../../components/buttons";

export const MainPage = () => {
	return (
		<>
			<h1>Main app</h1>
			<LogoutBtn />
			<Outlet />
			<div className="columns-2">
				<p>Well, let me tell you something, ...</p>
				<p className="break-inside-avoid-column">
					Sure, go ahead, laugh...
				</p>
				<p>Maybe we can live without...</p>
				<p>Look. If you think this is...</p>
			</div>
		</>
	);
};
