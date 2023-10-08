import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateDate } from "../utils/validate";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInform = () => {
        setIsSignIn(!isSignIn);
    };

    const handleButtonClick = () => {
        const message = checkValidateDate(
            email.current.value,
            password.current.value
        );
        setErrorMessage(message);

        // Sign In / Sign up
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    className="bg-gradient-to-tl from-black"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="netflix-background-image"
                />
            </div>

            <form
                onSubmit={(e) => e.preventDefault()}
                className="absolute bg-black p-12 pb-16 w-1/4  mt-44 mx-auto text-white right-0 left-0 rounded-md bg-opacity-[.85]"
            >
                <h1 className="text-3xl text-white py-4 font-bold">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignIn && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="px-2 py-3 my-4 w-full rounded-md outline-none bg-zinc-600"
                    />
                )}

                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="px-2 py-3 my-4 w-full rounded-md outline-none bg-zinc-600"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="px-2 py-3 my-4 mb-10 w-full rounded-md outline-none bg-zinc-600"
                />
                <p className="text-red-600 font-bold ">{errorMessage}</p>

                <button
                    onClick={handleButtonClick}
                    className="p-3 my-4 w-full text-white cursor-pointer bg-red-700 font-bold text-xl rounded-md"
                >
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>

                <p onClick={toggleSignInform} className="cursor-pointer mt-4">
                    {isSignIn
                        ? "New to Netflix? Sign up now."
                        : "Already a member? Sign In now."}
                </p>
            </form>
        </div>
    );
};

export default Login;
