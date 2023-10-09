const routes = [
    {
        path: "/",
        element: <div>
            Home
            <nav>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>,
    },
    {
        path: "/blog",
        element: <div>
            Blog
            <nav>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>,
    },
    {
        path: "/blog/:id",
        element: <BlogPost />,
    },
    {
        path: "/contact",
        element: <div>
            Contact
            <nav>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>,
    }
];

export default routes;
