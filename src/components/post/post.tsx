import './post.scss'
import {IPost} from "@/type/i-post.ts";
import {AvatarUserMini} from "@/components/avatar-user/avatar-user-mini.tsx";
import {CommentsSvg} from "@/components/svg/comments-svg.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import {CommentsList} from "@/components/comment-list/comments-list.tsx";
export const Post = ({post}: { post: IPost }) => {
    const [isShowComments, setIsShowComments] = useState<boolean>(false);

    const toggleShowComments = (): void => {
        setIsShowComments(!isShowComments);
    }

    return (
        <li className="post">
            <div className="post-title">
                <AvatarUserMini userId={post.userId}/>
                <h1 className="post-title__text">{post.title}</h1>
            </div>
            <div className="post__body">
                <p className="post__body__text">{post.title} {post.body}</p>
            </div>

            <Button className="post__btn" onClick={toggleShowComments}>
                <CommentsSvg/>
                <p>
                    Комментарии
                </p>
            </Button>
            {isShowComments && <CommentsList idPost={post.id}/>}
        </li>
    );
}

