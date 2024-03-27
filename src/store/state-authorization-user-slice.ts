import {createSlice} from "@reduxjs/toolkit";
import {User} from "@/type/user.ts";
import {AuthorizedUser} from "@/type/authorized-user.ts";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store.ts";

const initialUser: User = null

const initialState: AuthorizedUser = {
    user: initialUser,
    isAuthorization: false
}

export const stateAuthorizationUserSlice = createSlice({
    name: "stateUser",
    initialState: initialState,
    reducers: {
        successAuthorizationUser: (state, {payload}: { payload: User[] }) => {
            state.user = payload[0];
            state.isAuthorization = true;
        },
        exitAuthorizationUser: (state) => {
            state.user = initialUser;
            state.isAuthorization = false;
        }
    }
})

export const {actions, reducer} = stateAuthorizationUserSlice;

export const selectAuthorizationUser = (state: RootState) => state.stateUserSlice;