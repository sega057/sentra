import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {useAppSelector} from "../app/hooks";
import {selectAuth} from "../features/user/userSlice";

export const PrivateRoute = () => {
    const isAuth = useAppSelector(selectAuth);
    return isAuth ? <Outlet/> : <Navigate to="/login" replace />;
}