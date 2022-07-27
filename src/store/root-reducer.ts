import {combineReducers} from "@reduxjs/toolkit";
import {userReducer} from "./user/user.slice";
import {signUpReducer} from "./sign-up/sign-up.slice";

export const rootReducer = combineReducers({
    user: userReducer,
    signup: signUpReducer,
});
