import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addLatestSeries } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";

const useLatesetSeries = () => {
    const dispatch = useDispatch();

    const getLatestSeries = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
            OPTIONS
        );
        const json = await data.json();
        dispatch(addLatestSeries(json));
    };

    useEffect(() => {
        getLatestSeries();
    }, []);
};

export default useLatesetSeries;

// it is a costum hook which will fetch the movie from api and send it to store.