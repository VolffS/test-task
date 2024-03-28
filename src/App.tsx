import Header from "@/components/header/header.tsx";
import './shadcn-ui.css'
import {Provider} from "react-redux";
import {store} from "@/store/store.ts";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorRouter from "@/components/error/error-router.tsx";
import {User} from "@/components/user/user.tsx";
import {PostList} from "@/components/post-list/post-list.tsx";
import {Author} from "@/components/author/author.tsx";
import {MainContent} from "@/components/main-content/main-content.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "test-task/",
            element: <Header/>,
            errorElement: <ErrorRouter/>,
            children: [
                {
                    path: "test-task/",
                    element: <MainContent Children={PostList}/>,
                },
                {
                    path: "test-task/user/:userId",
                    element: <MainContent Children={User}/>,
                },
                {
                    path: "test-task/about-me/:userId",
                    element: <MainContent Children={User}/>,
                },
                {
                    path: "test-task/author",
                    element: <Author/>,
                },
            ]
        }
    ]);

    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    )
}

export default App
