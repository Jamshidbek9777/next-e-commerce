// authSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface AuthState {
     isLoggedIn: boolean;
}

const initialState: AuthState = {
     isLoggedIn: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
     name: "auth",
     initialState,
     reducers: {
          login(state) {
               state.isLoggedIn = true;
          },
          logout(state) {
               state.isLoggedIn = false;
          },
     },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
