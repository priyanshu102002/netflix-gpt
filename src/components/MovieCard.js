import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    return (
        <>
            <img className="w-40 rounded-lg" src={`${IMG_CDN_URL}${posterPath}`} />
        </>
    );
};

export default MovieCard;
