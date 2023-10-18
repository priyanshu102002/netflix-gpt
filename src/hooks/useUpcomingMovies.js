import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies= useSelector(store => store.movies.upcomingMovies)

    const getUpcomingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
            OPTIONS
        );
        const json = await data.json();
        dispatch(addUpcomingMovies(json));
    };

    useEffect(() => {
        !upcomingMovies && getUpcomingMovies();
    }, []);
};

export default useUpcomingMovies;

// it is a costum hook which will fetch the movie from api and send it to store.