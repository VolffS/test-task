import './commentary.scss'
import {CommentInfo} from "@/type/comment-info.ts";
export const Commentary = ({comment}: { comment: CommentInfo }) => {

    return (
        <li className="comment">
            <p className="comment__title">
                {comment.email}
            </p>
            <p className="comment__body">
                {comment.name}{comment.body}
            </p>
        </li>
    );
}