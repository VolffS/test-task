import './commentary.scss'
import {Comment} from "@/type/comment.ts";
export const Commentary = ({comment}: { comment: Comment }) => {

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