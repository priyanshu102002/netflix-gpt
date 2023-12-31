import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (movies === null) return;
    const mainMovie = movies.results[Math.floor(Math.random() * 20)];

    const { original_title, overview, id } = mainMovie;

    return (
        <div className="relative top-0 h-screen w-full  text-white">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};

export default MainContainer;
