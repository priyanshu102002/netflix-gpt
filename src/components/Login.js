import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateDate } from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const navigate = useNavigate();
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSignInform = () => {
        setIsSignIn(!isSignIn);
    };

    const handleButtonClick = () => {
        const message = checkValidateDate(
            email.current.value,
            password.current.value
        );
        setErrorMessage(message);
        if (message) return; //user ne glt enter kra hai to aage ka code mt chlao

        if (!isSignIn) {
            // SignUp Logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "/images/user-image.jpg",
                    })
                        .then(() => {
                            const { uid, displayName, email, photoURL } = auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                                })
                            );
                            navigate("/browse");
                        })
                        .catch((error) => {
                            setErrorMessage(error);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage("User already exists");
                });
        } else {
            //SignIn Logic

            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage("Inavlid Email or Password");
                });
        }
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    className="object-fill h-full w-full"
                    src="/images/netflix-bg-img.jpg"
                    alt="netflix-background-image"
                />
            </div>

            <form
                onSubmit={(e) => e.preventDefault()}
                className="absolute flex flex-col p-16 pb-28 gap-10 mt-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-black rounded-md bg-opacity-[.80] w-[460px]"
            >
                <h1 className="text-3xl text-white  font-bold">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignIn && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className=" py-2 px-5  leading-10 text-white rounded-md outline-none bg-[#333]"
                    />
                )}

                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className=" py-2 px-5  leading-10 text-white rounded-md outline-none bg-[#333]"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="py-2 px-5  leading-10 rounded-md outline-none text-white bg-[#333]"
                />
                <p className="text-red-600 font-medium -my-5 ">{errorMessage}</p>

                <button
                    onClick={handleButtonClick}
                    className="py-3 px-5 text-white cursor-pointer bg-red-700 font-bold text-xl rounded-md"
                >
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>

                <p onClick={toggleSignInform} className="cursor-pointer  text-white">
                    {isSignIn
                        ? "New to Netflix? Sign up now."
                        : "Already a member? Sign In now."}
                </p>
            </form>
        </div>
    );
};

export default Login;
