import { configureStore } from "@reduxjs/toolkit";
import {removeUser, setUser} from './slices/userSlice';
export const store = configureStore({
    reducer: {
        user: {removeUser, setUser},
    }
});