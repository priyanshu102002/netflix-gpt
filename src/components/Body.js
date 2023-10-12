import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import Error from "./Error";

const Body = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
        {
            path: "/error",
            element: <Error />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Body;
