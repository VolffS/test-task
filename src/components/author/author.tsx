import './author.scss'
import {AuthorSkills} from "@/components/author/author-skills/author-skills.tsx";
import {AuthorAvatar} from "@/components/author/author-avatar/author-avatar.tsx";
import {AuthorAboutMe} from "@/components/author/author-about-me/author-about-me.tsx";
import {AuthorHeader} from "@/components/author/author-header/author-header.tsx";
import {AuthorBusyness} from "@/components/author/author-busyness/author-busyness.tsx";

export const Author = () => {
    return (
        <main className="container main-about-me">
            <div className="about-me" id="about">
                <div className="about-me__block">
                    <AuthorHeader/>
                    <AuthorAvatar/>
                </div>
                <div className="about-me__block">
                    <AuthorAboutMe/>
                    <AuthorBusyness/>
                </div>
            </div>
            <AuthorSkills/>
        </main>
    );
}