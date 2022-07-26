import React from 'react';
import { Navigate } from 'react-router-dom';
import {useAppSelector} from "../app/hooks";
import {selectAuth} from "../features/user/user-slice";

export const PrivateRoute = ({children}: { children: JSX.Element }) => {
    const isAuth = useAppSelector(selectAuth);

    return isAuth ? children : <Navigate to="/login" />;
}