import './header.scss'
import {BurgerMenu} from "@/components/burger-menu/burger-menu.tsx";
import {Link, Outlet} from "react-router-dom";
import githubSvg from '@/assets/img/github.svg'


export default function Header() {
    return (
        <>
            <header>
                <div className="header-container">
                    <BurgerMenu/>
                    <nav className="navigation">
                        <Link className="navigation__heading" to={"/"}>Обкашляем вопросики?</Link>
                        <div className="nav">
                            <a href="https://www.youtube.com/watch?v=EaqJgQOVZ9k" className="navigation__link">
                                <p className="navigation__link__description">Ответ на смысл жизни</p>
                            </a>
                            <a href="https://github.com/VolffS" className="navigation__link">
                                <img src={githubSvg} alt="" className="navigation__link__img"/>
                                <p className="navigation__link__description">Github</p>
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
            <Outlet/>
        </>
    );
}
