import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorRouter from "@/components/error/error-router.tsx";
import './main-content.scss'
import {useGetPostsQuery} from "@/api/api.ts";
import {useMemo} from "react";
import {Post} from "@/components/post/post.tsx";
import {PostInfo} from "@/type/post-info.ts";
import {User} from "@/components/user/user.tsx";

export const PostList = () => {
    const {data: posts, isLoading, isSuccess} = useGetPostsQuery();
    const visibleTask = useMemo(
        () => posts,
        [posts]
    );

    return (
        <div>
            <ul>
                {(!isLoading && isSuccess) && visibleTask.map((post: PostInfo) => <Post key={post.id} post={post}/>)}
            </ul>
        </div>
    );
}

export const MainContent = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <PostList/>,
            errorElement: <ErrorRouter/>,
        },
        // {
        //     path: "/about-me",
        //     element: <AboutMe />
        // },
        // {
        //     path: "/about-user",
        //     element: <AboutUser/>
        // },
        {
            path: "/user/:userId",
            element: <User />,
        },

        // {
        //     path: "/post/:postId",
        //     element: <Post/>
        // },

    ]);
    return (
        <div className="container">
            <RouterProvider router={router}/>
        </div>

    );
}