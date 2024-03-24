import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import './hamburger.scss'
import {useSelector} from "react-redux";
import {RootState} from "@/store/store.ts";
import {IAuthorizationUser} from "@/type/i-authorization-user.ts";
import {AvatarUser} from "@/components/avatar-user/avatar-user.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import {HomeSvg} from "@/components/svg/home-svg.tsx";
import {HumanSvg} from "@/components/svg/human-svg.tsx";

export const BurgerMenu = () => {
    const {user, isAuthorization}: IAuthorizationUser = useSelector<RootState>(state => state.stateUserSlice)
    console.log(user)
    console.log(isAuthorization)
    return (
        <Sheet>
            <SheetTrigger className="hamburger">
                <div className="btn__hamb">
                </div>
            </SheetTrigger>
            <SheetContent side={"left"} className=" w-[320px] sm:w-[540px]">
                <SheetHeader>
                    <SheetTitle className="current-user">
                        <Button className="current-user__authorization">
                            {!isAuthorization ? "Выйти" : "Войти"}
                        </Button>
                        <AvatarUser/>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </SheetTitle>
                    <SheetDescription>
                        <Link className="hamburger-link" to={'/'}>
                            <HomeSvg/>
                            <p>Все посты</p>
                        </Link>
                        <Link className="hamburger-link" to={'/about-me'}>
                            <HumanSvg/>
                            <p>Обо мне</p>
                        </Link>

                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}