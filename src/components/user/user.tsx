import './user.scss'
import {Link, useLocation} from "react-router-dom";
import {useGetUserByUserIdQuery} from "@/api/api.ts";
import {AvatarUser} from "@/components/avatar-user/avatar-user.tsx";
import {UserBody} from "@/components/user-body/user-body.tsx";
import {Button} from "@/components/ui/button.tsx";
import {HomeSvg} from "@/components/svg/home-svg.tsx";
import {UserPosts} from "@/components/user-posts/user-posts.tsx";
import {IDeferredLoader} from "@/type/i-deferred-loader.ts";
import {useDeferredLoader} from "@/hooks/use-deferred-loader.ts";
import {LoaderAllSpace} from "@/components/loader/loaderAllSpace.tsx";

export const User = () => {
    const {state} = useLocation();
    const {
        data: user, isLoading: isLoadingUser,
        isSuccess: isSuccessUser,
        error: ErrorUser
    } = useGetUserByUserIdQuery(state.userId);
    const stateLoader: IDeferredLoader = useDeferredLoader()

    return (
        <main className="container">

            <div className="user-container">
                <Button className="back-post">
                    <Link className="back-post__link" to={'/'}>
                        <HomeSvg/>
                        <p>Назад</p>
                    </Link>
                </Button>
                <div className="user">
                    {stateLoader.isLoader && <LoaderAllSpace/>}
                    {!isLoadingUser && stateLoader.shutdownLoader()}
                    <AvatarUser/>
                    {(!stateLoader.isLoader && isSuccessUser) && <UserBody user={user}/>}
                    {ErrorUser && <p className="user-container-username">Error: Anonymous</p>}
                </div>
                {!stateLoader.isLoader && <UserPosts userId={state.userId}/>}
            </div>
        </main>
    );
}

