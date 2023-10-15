import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-full h-screen pt-60 px-12 absolute bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-base w-1/4">{overview}</p>
            <div>
                <button className="bg-white text-black bg-opacity-80  rounded-md px-7  py-3">
                    Play
                </button>
                <button className=" text-white bg-black rounded-md px-7  py-3 ml-4">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
