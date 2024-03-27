import './comment-list.scss'
import {Comment} from "@/type/comment.ts";
import {Commentary} from "@/components/comment/commentary.tsx";
import {useGetCommentsByPostIdQuery} from "@/api/api.ts";
import {LoaderMini} from "@/components/loader/loaderMini.tsx";
import {useMemo} from "react";

export const CommentsList = ({idPost}: { idPost: number }) => {
    const {
        data: comments,
        isLoading,
        isSuccess,
        error
    } = useGetCommentsByPostIdQuery(idPost);
    const visibleComments = useMemo(
        () => comments !== undefined ? comments : [],
        [comments]
    );

    if (isLoading)
        return <LoaderMini/>

    if (isSuccess && comments.length === 0)
        return <div className="comments-container">Ничего не найдено</div>

    if (error)
        return <div className="comments-container">Что-то пошло не так</div>

    return (
        <div className="comments-container">
            <ul className="comments-list">
                {!isLoading && visibleComments.map((comment: Comment) => <Commentary key={comment.id}
                                                                                                        comment={comment}/>)}
            </ul>
        </div>
    );
}