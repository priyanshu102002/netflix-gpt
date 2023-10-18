import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useLatestSeries from "../hooks/useLatesetSeries";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useLatestSeries();

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    return (
        <div className="bg-black w-full h-full relative">
            <Header />
            {showGptSearch ? (
                <GPTSearch />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
        </div>
    );
};

export default Browse;
