import React from "react";
import { Outlet } from "react-router-dom";
import { BottomDecor } from "../bottom-decor/bottom-decor";
import { Header } from "../header/header";
import { ThemeBtn } from "../buttons";

export const AuthPageWrapper: React.FC = () => {
	return (
		<div className="flex h-screen flex-col">
			<Header />
			<main className="relative mt-14 flex-1 overflow-hidden xl:mt-32">
				<div className="container mx-auto mb-12 flex flex-col items-center">
					<Outlet />
				</div>
				<BottomDecor />
			</main>
			<ThemeBtn />
		</div>
	);
};
