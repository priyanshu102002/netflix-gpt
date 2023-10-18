import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies= useSelector(store => store.movies.topRatedMovies)

    const getTopRatedMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
            OPTIONS
        );
        const json = await data.json();
        dispatch(addTopRatedMovies(json));
    };

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;

// it is a costum hook which will fetch the movie from api and send it to store.