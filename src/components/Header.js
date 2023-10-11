import React from "react";
import {auth} from '../utils/firebase'
import {signOut} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user)

    const signOutHandler = () =>{
        signOut(auth)
        .then(() => {
            // Sign-out successful.
            console.log("Sign Out Successful");
            navigate('/')
        })
        .catch((error) => {
                navigate('/error')
        });
    }
    return (
        <div className="absolute w-full px-16 py-1 z-10 bg-gradient-to-b from-black flex justify-between">
            <div>
                <img
                    className="w-44"
                    src="/images/netflixlogo.png"
                    alt="netflix logo"
                />
            </div>
            {user && <div className="flex">
                <div>
                    <img
                    className="w-8 h-20 mr-3 pt-8"
                    src={user.photoURL}
                />
                <p className="mr-2">({user.displayName})</p>
                </div>
                
                <button onClick={signOutHandler} className="font-bold text-white">SignOut</button>
            </div>}
        </div>
    );
};

export default Header;
