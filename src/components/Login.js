import React from "react";
import Header from "./Header";

const Login = () => {
    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="netflix-background-image"
                />
            </div>

            <form className="relative bg-black px-4 py-2 ">
                <input
                    type="text"
                    placeholder="Email Address"
                    className="px-2 py-4"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="px-2 py-4"
                />
                <button className="px-4 py-2 bg-red-500 rounded-sm">Sign In</button>
            </form>
        </div>
    );
};

export default Login;
