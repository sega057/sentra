import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@src/hooks/use-app";

export const PrivateRoute = () => {
	const idToken = useAppSelector((state) => state.client.idToken);
	return idToken ? <Outlet /> : <Navigate to="/login" replace />;
};
