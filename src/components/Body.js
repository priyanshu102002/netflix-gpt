import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Error from './Error'

const Body = () => {
    const dispatch = useDispatch();

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

    useEffect(() => {
        // whenever user sign in or sign up this function will called
        onAuthStateChanged(
            auth,
            (user) => {
                if (user) {
                    const {uid,displayName,email,photoURL} = user;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
                } else {
                    // User is signed out
                    dispatch(removeUser())
                    // navigate('/')  cannot do this here because it works only on child element of the router
                }
            }
        );
    });

    return <RouterProvider router={router} />;
};

export default Body;
