import Header from "@/components/header/header.tsx";
import './shadcn-ui.css'
import {Provider} from "react-redux";
import {store} from "@/store/store.ts";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorRouter from "@/components/error/error-router.tsx";
import {User} from "@/components/user/user.tsx";
import {PostList} from "@/components/post-list/post-list.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Header/>,
            errorElement: <ErrorRouter/>,
            children: [
                {
                    path: "/",
                    element: <PostList/>,
                },
                {
                    path: "/user/:userId",
                    element: <User/>,
                },
            ]
        },
        // {
        //     path: "/",
        //     element: <PostList/>,
        //     errorElement: <ErrorRouter/>,
        // },
        // {
        //     path: "/about-me",
        //     element: <AboutMe />
        // },
        // {
        //     path: "/about-user",
        //     element: <AboutUser/>
        // },


        // {
        //     path: "/post/:postId",
        //     element: <Post/>
        // },

    ]);
  return (
    <>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </>
  )
}

export default App
