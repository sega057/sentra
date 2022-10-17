import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@src/hooks/use-app";

export const PrivateRoute = () => {
	const idToken = useAppSelector((state) => state.user.idToken);
	// const idToken = true;
	return idToken ? <Outlet /> : <Navigate to="/login" replace />;
};
