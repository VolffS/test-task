import {useGetPostsQuery} from "@/api/api.ts";
import {useMemo} from "react";
import {Loader} from "@/components/loader/loader.tsx";
import {Post} from "@/components/post/post.tsx";
import {PostInfo} from "@/type/post-info.ts";

export const PostList = () => {
    const {data: posts, isLoading, isSuccess} = useGetPostsQuery();
    const visibleTask = useMemo(
        () => posts,
        [posts]
    );

    return (
        <main className="container">

            <ul>
                {isLoading && <Loader />}
                {(!isLoading && isSuccess) && visibleTask.map((post: PostInfo) => <Post key={post.id}
                                                                                        post={post}/>)}
            </ul>
        </main>

    );
}