import './user.scss'
import {Link, useLocation} from "react-router-dom";
import {useGetUserByUserIdQuery} from "@/api/api.ts";
import {AvatarUser} from "@/components/avatar-user/avatar-user.tsx";
import {UserBody} from "@/components/user-body/user-body.tsx";
import {Button} from "@/components/ui/button.tsx";
import {HomeSvg} from "@/components/svg/home-svg.tsx";
import {UserPosts} from "@/components/user-posts/user-posts.tsx";
import {LoaderAllSpace} from "@/components/loader/loaderAllSpace.tsx";
import {useMemo} from "react";

export const User = () => {
    const {state} = useLocation();
    const {
        data: user, isLoading: isLoadingUser,
        error: ErrorUser
    } = useGetUserByUserIdQuery(state.userId);
    const visibleUser = useMemo(
        () => user !== undefined ? user : null,
        [user]
    );

    if (isLoadingUser)
        return <LoaderAllSpace/>

    if (visibleUser === null)
        return <p className="user-container-username">Пользователь не найден</p>

    if (ErrorUser) {
        return <p className="user-container-username">Что-то пошло не так</p>
    }

    return (
        <div className="user-container">
            <Button className="back-post">
                <Link className="back-post__link" to={'/'}>
                    <HomeSvg/>
                    <p>Назад</p>
                </Link>
            </Button>
            <div className="user">
                <AvatarUser/>
                {!isLoadingUser && <UserBody user={visibleUser}/>}
            </div>
            {!isLoadingUser && <UserPosts userId={state.userId}/>}
        </div>
    );
}

