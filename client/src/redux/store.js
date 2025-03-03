import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlince";

export const store = configureStore({
    reducer: {
        user: userReducer
        }
    })