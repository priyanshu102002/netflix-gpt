import React, { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            OPTIONS
        );
        const json = await data.json();

        const filterData = json.results.filter(
            (videos) => videos.type == "Trailer"
        );
        const trailers = filterData.length ? filterData[0] : json.results[0];
        // setTrailerId(trailers.key) also an option using useState
        dispatch(addTrailerVideo(trailers));
    };
    useEffect(() => {
        getMovieVideo();
    }, []);

    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=lDSA6660qNewiIXx`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
                controls
                autoPlay
                allowFullScreen
            ></iframe>
            <div>VideoBackground</div>
        </div>
    );
};

export default VideoBackground;
