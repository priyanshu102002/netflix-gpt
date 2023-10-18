import { useDispatch,useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import {useEffect } from "react";
import { OPTIONS } from "../utils/constants";


const useNowPlayingTrailer = (movieId) =>{
    const trailerVideo = useSelector(store => store.movies.trailerVideo)
    
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
        !trailerVideo && getMovieVideo();
    }, []);
}

export default useNowPlayingTrailer;