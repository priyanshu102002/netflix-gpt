import React from "react";
import Header from "./Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import Signup from "./Signup";

const Body = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <Signup />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Body;
