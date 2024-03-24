import {IUser} from "@/type/i-user.ts";

export interface IAuthorizationUser {
    user: IUser,
    isAuthorization: boolean
}