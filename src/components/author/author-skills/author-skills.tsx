import './author-skills.scss'
import jsOriginalImg from "@/assets/img/javascript-original.svg";
import typescriptOriginalImg from "@/assets/img/typescript-original.svg";
import htmlOriginalImg from "@/assets/img/html5-original.svg";
import cssOriginalImg from "@/assets/img/css3-original.svg";
import reactOriginalImg from "@/assets/img/react-original.svg";
import reduxOriginalImg from "@/assets/img/redux-original.svg";
import nodejsOriginalImg from "@/assets/img/nodejs-original.svg";
import actuallyGif from "@/assets/img/precoler/actually.gif";
import cenasoredGif from "@/assets/img/precoler/cenasored-twitch.gif";
import microwaveGif from "@/assets/img/precoler/hi-microwave-hi-micro.gif";
import gyllenhaalGif from "@/assets/img/precoler/jake-gyllenhaal.gif";
import takingNotesGif from "@/assets/img/precoler/notes-taking-notes.gif";
import leonGif from "@/assets/img/precoler/leon-kennedy-resident-evil.gif";
import pepegaAimGif from "@/assets/img/precoler/pepegaAim.gif";
import xqcGif from "@/assets/img/precoler/xqc-xqcl.gif";

export const AuthorSkills = () => {
  return (
      <div className="skills" id="skills">
          <p className="theme__header">skills</p>
          <article className="skills__description">
              <img className="skills__description__img" src={jsOriginalImg} alt=""/>
              <img className="skills__description__img" src={typescriptOriginalImg} alt=""/>
              <img className="skills__description__img" src={htmlOriginalImg} alt=""/>
              <img className="skills__description__img" src={cssOriginalImg} alt=""/>
              <img className="skills__description__img" src={reactOriginalImg} alt=""/>
              <img className="skills__description__img" src={reduxOriginalImg} alt=""/>
              <img className="skills__description__img" src={nodejsOriginalImg} alt=""/>
              <img className="skills__description__img" src={actuallyGif} alt=""/>
              <img className="skills__description__img" src={cenasoredGif} alt=""/>
              <img className="skills__description__img" src={microwaveGif} alt=""/>
              <img className="skills__description__img" src={gyllenhaalGif} alt=""/>
              <img className="skills__description__img" src={takingNotesGif} alt=""/>
              <img className="skills__description__img" src={leonGif} alt=""/>
              <img className="skills__description__img" src={pepegaAimGif} alt=""/>
              <img className="skills__description__img" src={xqcGif} alt=""/>
          </article>
      </div>
  )
}