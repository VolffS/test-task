import './user-posts.scss'
import {IPost} from "@/type/i-post.ts";
import {Post} from "@/components/post/post.tsx";
import {useGetPostsByUserIdQuery} from "@/api/api.ts";
import {useMemo} from "react";
import {IDeferredLoader} from "@/type/i-deferred-loader.ts";
import {useDeferredLoader} from "@/hooks/use-deferred-loader.ts";
import {LoaderMini} from "@/components/loader/loaderMini.tsx";

export const UserPosts = ({userId}:{userId: number}) => {
    const {
        data: posts, isLoading: isLoadingPost,
        isSuccess: isSuccessPost,
        error: ErrorPost
    } = useGetPostsByUserIdQuery(userId);
    const stateLoader: IDeferredLoader = useDeferredLoader()

    const visibleTask = useMemo(
        () => posts,
        [posts]
    );

  return (
      <div className="user-post">
          <p className="user-post__title">Посты:</p>
          <ul>
              {stateLoader.isLoader && <LoaderMini/>}
              {!isLoadingPost && stateLoader.shutdownLoader()}
              {(!stateLoader.isLoader && isSuccessPost) && visibleTask.map((post: IPost) => <Post key={post.id} post={post}/>)}
              {(isSuccessPost && visibleTask.length === 0) && <p>Ничего не найдено</p>}
          </ul>
          {ErrorPost && <p className="user-container-username">Ничего не найдено</p>}
      </div>
  );
}