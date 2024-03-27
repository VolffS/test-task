import {useGetPostsQuery} from "@/api/api.ts";
import {useMemo} from "react";
import {LoaderAllSpace} from "@/components/loader/loaderAllSpace.tsx";
import {Post} from "@/components/post/post.tsx";
import {PostInfo} from "@/type/post-info.ts";

export const PostList = () => {
    const {data: posts, isLoading, isSuccess, error} = useGetPostsQuery(undefined);
    const visiblePost = useMemo(
        () => posts !== undefined ? posts : [],
        [posts]
    );

    if (isLoading)
        return <LoaderAllSpace/>

    if (isSuccess && visiblePost.length === 0)
        return <div className="post">Ничего не найдено</div>

    if (error)
        return <div className="post">Ошибка подключения</div>

    return (
        <ul>
            {!isLoading && visiblePost.map((post: PostInfo) => <Post key={post.id}
                                                                     post={post}/>)}
        </ul>
    );
}