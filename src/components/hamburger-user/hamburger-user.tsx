import {useAuthorizationActions} from "@/hooks/use-authorization-actions.ts";
import {Button} from "@/components/ui/button.tsx";
import {AuthorizationUser} from "@/components/authorization-user/authorization-user.tsx";
import {AvatarUser} from "@/components/avatar-user/avatar-user.tsx";
import {AuthorizedUser} from "@/type/authorized-user.ts";
import {useSelector} from "react-redux";
import {selectAuthorizationUser} from "@/store/state-authorization-user-slice.ts";

export const HamburgerUser = () => {
    const {user, isAuthorization}: AuthorizedUser = useSelector(selectAuthorizationUser)
    const {exitAuthorizationUser} = useAuthorizationActions();

    return (
        <>
            {isAuthorization &&
                <Button className="current-user__authorization"
                        onClick={() => exitAuthorizationUser()}
                > Выйти
                </Button>}
            {!isAuthorization && < AuthorizationUser/>}
            <AvatarUser/>
            <p>{isAuthorization ?user.username :"Anonymous"}</p>
            <p>{isAuthorization ?user.email :"Anonymous@ano.mous"}</p>
        </>
    );
}