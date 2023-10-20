import React from "react";
import {auth} from '../utils/firebase'
import {signOut} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user)

    const signOutHandler = () =>{
        signOut(auth)
        .then(() => {
        })
        .catch((error) => {
                navigate('/error')
        });
    }

    useEffect(() => {
        // whenever user sign in or sign up this function will called
        const unsubscribe = onAuthStateChanged(
            auth,
            (user) => {
                if (user) {
                    const {uid,displayName,email,photoURL} = user;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
                    navigate('/browse')
                } else {
                    // User is signed out
                    dispatch(removeUser())
                    navigate('/')
                }
            }
        );
        return () => unsubscribe();
    },[]);

    const gptSearchHandler = () =>{
        dispatch(toggleGptSearchView())
    }

    return (
        <div className="absolute z-10 w-full flex justify-between h-20 text-white items-center px-8 ">
            <div>
                <img
                    className="w-52"
                    src="/images/netflixlogo.png"
                    alt="netflix logo"
                />
            </div>
            {user && <div className="flex gap-8">
                <button className="bg-[#10a37f] px-4 py-2 rounded-md" onClick={gptSearchHandler}>GPT Search</button>
                
                
                <button onClick={signOutHandler} className="bg-[#e50914] px-4 py-2 rounded-md">SignOut</button>
            </div>}
        </div>
    );
};

export default Header;
