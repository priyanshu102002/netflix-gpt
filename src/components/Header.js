import React from "react";


const Header = () => {
    return (
        <div className="absolute w-full px-16 py-1 z-10 bg-gradient-to-b from-black">
            <div>
                <img
                    className="w-44"
                    src="/images/netflixlogo.png"
                    alt="netflix logo"
                />
            </div>
        </div>
    );
};

export default Header;
