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

export const stateUserSlice = createSlice({
    name: "stateUser",
    initialState: initialState,
    reducers: {
        refreshUser: (state, {payload}: { payload: IAuthorizationUser }) => {
            state.user = payload.user
            state.isAuthorization = payload.isAuthorization
        }
    }
})

export const {actions, reducer} = stateUserSlice