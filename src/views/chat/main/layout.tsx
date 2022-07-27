import * as React from "react";
import { Outlet } from "react-router-dom";
import {BtnLogout} from "../../../components/buttons/logout-btn/btn-logout";

export const MainPage = () => {
    return <>
        <h1>Main app</h1>
        <BtnLogout />
        <Outlet />
    </>
};