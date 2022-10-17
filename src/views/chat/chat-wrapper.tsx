import * as React from "react";
import { AsidePanel } from "@components/layouts/aside/aside-panel";
import { Outlet } from "react-router";

export const ChatWrapper = () => {
	return (
		<div className="flex h-screen">
			<AsidePanel />
			<div className="flex h-full w-full">
				<Outlet />
			</div>
		</div>
	);
};
