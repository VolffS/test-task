import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import './hamburger.scss'
import {useSelector} from "react-redux";
import {RootState} from "@/store/store.ts";
import {IAuthorizationUser} from "@/type/i-authorization-user.ts";
import {Link} from "react-router-dom";
import {HomeSvg} from "@/components/svg/home-svg.tsx";
import {HumanSvg} from "@/components/svg/human-svg.tsx";
import {StarSvg} from "@/components/svg/star-svg.tsx";
import {HamburgerUser} from "@/components/hamburger-user/hamburger-user.tsx";

export const BurgerMenu = () => {
    const {user, isAuthorization}: IAuthorizationUser = useSelector<RootState>(state => state.stateUserSlice)
    const classLink = `hamburger-link ${isAuthorization ? "link-active" : "link-disabled"}`

    return (
        <Sheet>
            <SheetTrigger className="hamburger">
                <div className="btn__hamb">
                </div>
            </SheetTrigger>
            <SheetContent side={"left"} className=" w-[320px] sm:w-[540px]">
                <SheetHeader>
                    <SheetTitle className="current-user">
                        <HamburgerUser user={user} isAuthorization={isAuthorization} />
                    </SheetTitle>
                    <SheetDescription>
                        <Link className="hamburger-link link-active" to={'/'}>
                            <HomeSvg/>
                            <p>Все посты</p>
                        </Link>
                        <Link className={classLink} to={isAuthorization ? `/about-me/${user.id}` : ""}
                              state={{userId: `${user.id}`}}>
                            <HumanSvg/>
                            <p>Обо мне</p>
                        </Link>
                        <Link className="hamburger-link link-active" to={'/author'}>
                            <StarSvg/>
                            <p>Автор</p>
                        </Link>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

