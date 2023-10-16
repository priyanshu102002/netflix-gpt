import React from "react";
import {auth} from '../utils/firebase'
import {signOut} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

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
        
    }

    return (
        <div className="absolute z-20 top-0 w-full px-16 bg-gradient-to-b from-black flex justify-between">
            <div>
                <img
                    className="w-44"
                    src="/images/netflixlogo.png"
                    alt="netflix logo"
                />
            </div>
            {user && <div className="flex">
                <button className="bg-purple-600 px-4 py-2 rounded-lg m-7" onClick={gptSearchHandler}>GPT Search</button>
                <div>
                    <img
                    className="w-8 h-20 mr-3 pt-6 rounded-lg"
                    src='/images/user-icon.jpg'
                />
                </div>
                
                <button onClick={signOutHandler} className="font-bold text-white">SignOut</button>
            </div>}
        </div>
    );
};

export default Header;
