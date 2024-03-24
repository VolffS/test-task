import {UserInfo} from "@/type/user-info.ts";
import './user-body.scss'
export const UserBody = ({user}: { user: UserInfo }) => {
    return (
        <div className="user-body">
            <p className="user-container-username">Имя профиля: {user.username}</p>
            <p className="user-container-name">Настоящие имя: {user.name}</p>
            <p className="user-container-name">Email: {user.email}</p>
            <p className="user-container-name">Телефон: {user.phone}</p>
        </div>
    );
}