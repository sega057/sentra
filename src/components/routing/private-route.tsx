import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/hooks/use-app";
import { selectAuth } from "@/store/user/user.slice";

export const PrivateRoute = () => {
	// const isAuth = useAppSelector(selectAuth);
	const isAuth = true;
	return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};
