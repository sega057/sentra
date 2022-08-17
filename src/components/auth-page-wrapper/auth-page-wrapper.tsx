import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { ThemeBtn } from "../buttons";
import { BottomDecor } from "@components/bottom-decor/bottom-decor";

export const AuthPageWrapper: React.FC = () => {
	return (
		<div className="flex h-screen flex-col">
			<Header />
			<main className="relative mt-14 grow xl:mt-32">
				<div className="container mx-auto mb-12 flex flex-col items-center">
					<Outlet />
				</div>
			</main>
			<div className="w-full flex-none overflow-hidden">
				<BottomDecor />
			</div>
			<ThemeBtn />
		</div>
	);
};
