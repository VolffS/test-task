import './author-avatar.scss'
import meAuthor from "@/assets/img/me-author.jpg";
import reactOriginalImg from "@/assets/img/react-original.svg";
import typescriptOriginalImg from "@/assets/img/typescript-original.svg";
import nodejsOriginalImg from "@/assets/img/nodejs-original.svg";

export const AuthorAvatar = () => {
  return (
      <aside className="about-me__photo">
          <div className="about-me__photo__ellipse">
              <img className="about-me__photo__img" src={meAuthor} alt=""/>
          </div>
          <div className="about-me__photo__ellipse-decoration decor1">
              <img className="decoration-img" src={reactOriginalImg} alt=""/>
          </div>
          <div className="about-me__photo__ellipse-decoration decor2">
              <img className="decoration-img" src={typescriptOriginalImg}
                   alt=""/></div>
          <div className="about-me__photo__ellipse-decoration decor3">
              <img className="decoration-img" src={nodejsOriginalImg}
                   alt=""/>
          </div>
          <div className="about-me__photo__ellipse-decoration decor4"></div>
          <div className="about-me__photo__ellipse-decoration decor5"></div>
          <div className="about-me__photo__ellipse-decoration decor6"></div>
      </aside>
  );
}