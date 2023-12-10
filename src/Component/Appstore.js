import { configureStore } from "@reduxjs/toolkit";
import Languageslice from "./utils/Languageslice";
import UserSlice from "./UserSlice";
import MoviesSlice from "./utils/MoviesSlice";

export const appstore = configureStore({
    reducer:{
        langs:Languageslice,
        users: UserSlice,
        movies : MoviesSlice
    }
})