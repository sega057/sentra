import React from "react";
import {BrowserRouter as Router, Link, Routes} from "react-router-dom";
import {Route} from "react-router";
import {PrivateRoute} from "./privateRoute";
import {BtnLogout} from "../pages/login/btn-logout";
import {SignInPage} from "../pages/login/signIn";
import {SignUpPage} from "../features/signup/signUp";
import {ThemeBtn} from "../components/theme-btn/theme-btn";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <PrivateRoute>
                        <>
                            <h1>Main app</h1>
                            <BtnLogout />
                        </>
                    </PrivateRoute>
                } />
                <Route path="/login" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="*" element={<div>
                    <h1>Not found</h1>
                    <Link to="/">Go home</Link>
                </div>} />
            </Routes>
            <ThemeBtn/>
        </Router>
    );
};
