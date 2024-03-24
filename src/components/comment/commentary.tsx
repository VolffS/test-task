import './commentary.scss'
import {IComment} from "@/type/i-comment.ts";
export const Commentary = ({comment}: { comment: IComment }) => {

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