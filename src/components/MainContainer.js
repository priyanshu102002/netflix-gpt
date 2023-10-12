import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import appStore from "../utils/appStore";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (movies === null) return;
    const mainMovie = movies.results[Math.floor((Math.random() * 20) + 1)];
    // const mainMovie = movies.results[0];
    console.log(mainMovie);

    const { original_title, overview , id } = mainMovie;

    return (
        <div className="h-screen w-full bg-gray-800 text-white">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId = {id} />
        </div>
    );
};

export default MainContainer;
