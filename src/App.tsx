import Header from "@/components/header/header.tsx";
import './shadcn-ui.css'
import {Provider} from "react-redux";
import {store} from "@/store/store.ts";
import {createBrowserRouter, RouterProvider, HashRouter} from "react-router-dom";
import ErrorRouter from "@/components/error/error-router.tsx";
import {User} from "@/components/user/user.tsx";
import {PostList} from "@/components/post-list/post-list.tsx";
import {Author} from "@/components/author/author.tsx";
import {MainContent} from "@/components/main-content/main-content.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Header/>,
            errorElement: <ErrorRouter/>,
            children: [
                {
                    path: "/",
                    element: <MainContent Children={PostList}/>,
                },
                {
                    path: "/user/:userId",
                    element: <MainContent Children={User}/>,
                },
                {
                    path: "/about-me/:userId",
                    element: <MainContent Children={User}/>,
                },
                {
                    path: "/author",
                    element: <Author/>,
                },
            ]
        }
    ]);

    return (
        <Provider store={store}>
            <HashRouter>
            <RouterProvider router={router}/>
            </HashRouter>
        </Provider>
    )
}

export default App
