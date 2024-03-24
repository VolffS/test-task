import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "@/type/i-user.ts";
import {IAuthorizationUser} from "@/type/i-authorization-user.ts";

const initialUser: IUser = {
    "id": 0,
    "name": "",
    "username": "Anonymous",
    "email": "Anonymous@ano.mous",
    "phone": "",
}

const initialState: IAuthorizationUser = {
    user: initialUser,
    isAuthorization: false
}

export const stateAuthorizationUserSlice = createSlice({
    name: "stateUser",
    initialState: initialState,
    reducers: {
        successAuthorizationUser: (state, {payload}: { payload: IUser[] }) => {
            state.user = payload[0];
            state.isAuthorization = true;
        },
        exitAuthorizationUser: (state) => {
            state.user = initialUser;
            state.isAuthorization = false;
        }
    }
})

export const {actions, reducer} = stateAuthorizationUserSlice