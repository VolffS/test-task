import './author-header.scss'

export const AuthorHeader = () => {
    return (
        <article className="about-me__header">
            <p> Привет, я </p>
            <h1 className="about-me__name">{"< Kosko"} <br/> {"Kostya />"}</h1>
            <h2>Frontend Разработчик</h2>
            <div className="about-me__experience">
                <span className="experience-container">
                    <p>0,1</p>
                    <p className="experience-text">Лет <br/> Опыта</p>
                </span>
                <span className="experience-container">
                    <p>!</p>
                    <p className="experience-text">Много проетиков <br/> на гитхабчике)</p>
                </span>
            </div>
        </article>
    );
}