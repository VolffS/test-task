import {useGetPostsQuery} from "@/api/api.ts";
import {useMemo, useState} from "react";
import {Loader} from "@/components/loader/loader.tsx";
import {Post} from "@/components/post/post.tsx";
import {PostInfo} from "@/type/post-info.ts";

let status = true

export const PostList = () => {
    const {data: posts, isLoading, isSuccess} = useGetPostsQuery();
    const [isLoaded, setIsLoaded] = useState<boolean>(true);
    const visibleTask = useMemo(
        () => posts,
        [posts]
    );

    const shutdownLoader = () => {
        setTimeout(() => {
            setIsLoaded(false)
        }, 5000)
    }

    return (
        <main className="container">

            <ul>
                {isLoaded && <Loader/>}
                {!isLoading && shutdownLoader()}
                {/*{isLoading ? <Loader /> : endLoader()}*/}
                {(!isLoading && isSuccess) && visibleTask.map((post: PostInfo) => <Post key={post.id}
                                                                                        post={post}/>)}
            </ul>
        </main>

    );
}