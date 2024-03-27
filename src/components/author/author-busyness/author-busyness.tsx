import './author-busyness.scss'
import xmlImg from "@/assets/img/xml.svg";
import codeBracesImg from "@/assets/img/code-braces.svg";

export const AuthorBusyness = () => {
    return (
        <aside className="about-me__busyness">
            <div className="about-me__busyness__container">
                <div className="busyness">
                    <p>Frontend Developer</p>
                    <a className="busyness__link"
                       href="https://github.com/VolffS">Projects</a>
                </div>
                <div>
                    <img src={xmlImg} alt=""/>
                </div>
            </div>
            <div className="about-me__busyness__container">
                <div className="busyness">
                    <p>Freelancer</p>
                    <a className="busyness__link"
                       href="https://github.com/VolffS">Hire me!</a>
                </div>
                <div>
                    <img src={codeBracesImg} alt=""/>
                </div>
            </div>
        </aside>
    );
}