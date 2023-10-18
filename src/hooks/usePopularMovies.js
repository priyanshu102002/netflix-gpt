import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies)

    const getNowPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
            OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json));
    };

    useEffect(() => {
        !popularMovies && getNowPopularMovies();
    }, []);
};

export default usePopularMovies;

// it is a costum hook which will fetch the movie from api and send it to store.