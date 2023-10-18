import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
            OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json));
    };

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;

// it is a costum hook which will fetch the movie from api and send it to store.