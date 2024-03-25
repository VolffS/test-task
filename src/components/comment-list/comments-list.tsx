import './comment-list.scss'
import {IComment} from "@/type/i-comment.ts";
import {Commentary} from "@/components/comment/commentary.tsx";
import {useGetCommentsByPostIdQuery} from "@/api/api.ts";
import {IDeferredLoader} from "@/type/i-deferred-loader.ts";
import {useDeferredLoader} from "@/hooks/use-deferred-loader.ts";
import {LoaderMini} from "@/components/loader/loaderMini.tsx";

export const CommentsList = ({idPost}: { idPost: number }) => {
    const {
        data: comments,
        isLoading,
        isSuccess,
        error
    } = useGetCommentsByPostIdQuery(idPost);
    const stateLoader: IDeferredLoader = useDeferredLoader()

    return (
        <div className="comments-container">
            <ul className="comments-list">
                {stateLoader.isLoader && <LoaderMini/>}
                {!isLoading && stateLoader.shutdownLoader()}
                {(!stateLoader.isLoader && isSuccess) && comments.map((comment: IComment) => <Commentary key={comment.id}
                                                                                                         comment={comment}/>)}
                {(isSuccess && comments.length === 0) && <li className="comment">Ничего не найдено</li>}
                {error && <li className="comment">Что-то пошло не так</li>}
            </ul>
        </div>
    );
}