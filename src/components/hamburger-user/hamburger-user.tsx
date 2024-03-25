import {IAuthorizationUser} from "@/type/i-authorization-user.ts";
import {useActions} from "@/hooks/use-actions.ts";
import {Button} from "@/components/ui/button.tsx";
import {AuthorizationUser} from "@/components/authorization-user/authorization-user.tsx";
import {AvatarUser} from "@/components/avatar-user/avatar-user.tsx";

export const HamburgerUser = ({user, isAuthorization}: IAuthorizationUser) => {
    const {exitAuthorizationUser} = useActions();

    return (
        <>
            {isAuthorization &&
                <Button className="current-user__authorization"
                        onClick={() => exitAuthorizationUser()}
                > Выйти
                </Button>}
            {!isAuthorization && < AuthorizationUser/>}
            <AvatarUser/>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </>
    );
}