import {useGetPostsQuery} from "@/api/api.ts";
import {useMemo} from "react";
import {LoaderAllSpace} from "@/components/loader/loaderAllSpace.tsx";
import {Post} from "@/components/post/post.tsx";
import {IPost} from "@/type/i-post.ts";
import {useDeferredLoader} from "@/hooks/use-deferred-loader.ts";
import {IDeferredLoader} from "@/type/i-deferred-loader.ts";

export const PostList = () => {
    const {data: posts, isLoading, isSuccess, error} = useGetPostsQuery();
    const stateLoader: IDeferredLoader = useDeferredLoader()
    const visibleTask = useMemo(
        () => posts,
        [posts]
    );



    return (
        <main className="container">
            <ul>
                {stateLoader.isLoader && <LoaderAllSpace/>}
                {!isLoading && stateLoader.shutdownLoader()}
                {(!stateLoader.isLoader && isSuccess) && visibleTask.map((post: IPost) => <Post key={post.id}
                                                                                                post={post}/>)}
                {(isSuccess && visibleTask.length === 0) && <li className="post">Ничего не найдено</li>}
                {error && <li className="post">Ошибка подключения</li>}
            </ul>
        </main>

    );
}