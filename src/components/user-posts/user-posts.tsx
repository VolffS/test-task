import './user-posts.scss'
import {PostInfo} from "@/type/post-info.ts";
import {Post} from "@/components/post/post.tsx";
import {useGetPostsByUserIdQuery} from "@/api/api.ts";
import {useMemo} from "react";

export const UserPosts = ({userId}:{userId: number}) => {
    const {
        data: posts, isLoading: isLoadingPost,
        isSuccess: isSuccessPost,
        error: ErrorPost
    } = useGetPostsByUserIdQuery(userId);

    const visibleTask = useMemo(
        () => posts,
        [posts]
    );

  return (
      <div className="user-post">
          <p className="user-post__title">Посты:</p>
          {isLoadingPost && <div></div>}
          <ul>
              {(!isLoadingPost && isSuccessPost) && visibleTask.map((post: PostInfo) => <Post post={post}/>)}
              {(isSuccessPost && visibleTask.length === 0) && <p>Ничего не найдено</p>}
          </ul>
          {ErrorPost && <p className="user-container-username">Ничего не найдено</p>}
      </div>
  );
}