import { Outlet, useNavigation } from "react-router";
import { NavLink } from "react-router-dom";
import BlogPost from "./components/blog-post";
import Blog from "./components/blog";


const routes =  [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "blog",
                element: <Blog />,
                loader: () => fetch("https://jsonplaceholder.typicode.com/posts?_limit=10"),
            },
            {
                path: "blog/:id",
                element: <BlogPost />,
            },
            {
                path: "contact",
                element: <div>
                    Contact
                </div>,
            }
        ],
    },
    {
        path: "*",
        element: <div>Not Found</div>,
    }
]

function Root() {
    const {state} = useNavigation();
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </header>
            <div className="content">
                {state === "loading" && "Loading..."}
                <Outlet />
            </div>
            <footer>
                Footer
            </footer>
        </>
    );
}

export default routes;
