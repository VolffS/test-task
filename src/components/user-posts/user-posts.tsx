import './user-posts.scss'
import {PostInfo} from "@/type/post-info.ts";
import {Post} from "@/components/post/post.tsx";
import {useGetPostsByUserIdQuery} from "@/api/api.ts";
import {useMemo} from "react";
import {LoaderMini} from "@/components/loader/loaderMini.tsx";

export const UserPosts = ({userId}:{userId: number}) => {
    const {
        data: posts, isLoading: isLoadingPost,
        isSuccess: isSuccessPost,
        error: ErrorPost
    } = useGetPostsByUserIdQuery(userId);
    const visiblePost = useMemo(
        () => posts !== undefined ? posts : [],
        [posts]
    );

    if (isLoadingPost)
        return <LoaderMini/>

    if (ErrorPost)
        return <p className="user-container-username">Что-то пошло не так</p>

    if ((isSuccessPost && visiblePost.length === 0))
        return <p className="user-container-username">Ничего не найдено</p>

    return (
        <div className="user-post">
            <p className="user-post__title">Посты:</p>
          <ul>
              {!isLoadingPost && visiblePost.map((post: PostInfo) => <Post key={post.id} post={post}/>)}
          </ul>
      </div>
  );
}