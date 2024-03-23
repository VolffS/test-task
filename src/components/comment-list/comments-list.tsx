import './comment-list.scss'
import {CommentInfo} from "@/type/comment-info.ts";
import {Commentary} from "@/components/comment/commentary.tsx";
import {useGetCommentsByPostIdQuery} from "@/api/api.ts";

export const CommentsList = ({idPost}: { idPost: number }) => {
    const {data: comments, isLoading, isSuccess, error} = useGetCommentsByPostIdQuery(idPost);

    return (
        <div className="comments-container">
            <ul className="comments-list">
                {isLoading && <div></div>}
                {(!isLoading && isSuccess) && comments.map((comment: CommentInfo) => <Commentary key={comment.id}
                                                                                                 comment={comment}/>)}
                {error && "Что-то пошло не так"}
            </ul>
        </div>
    );
}
// loader нужен