import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    if(!posterPath) return null;
    return (
        <>
            <img
                className="w-40  rounded-lg"
                src={`${IMG_CDN_URL}${posterPath}`}
            />
        </>
    );
};

export default MovieCard;
