import {User} from "@/type/user.ts";

export interface AuthorizedUser {
    user: User,
    isAuthorization: boolean
}