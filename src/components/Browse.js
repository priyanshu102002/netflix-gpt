import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useLatestSeries from "../hooks/useLatesetSeries";
import GPTSearch from "./GPTSearch";

const Browse = () => {
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    useLatestSeries()
    return (
        <div className="bg-black w-full  relative">
            <Header />
            {/* <GPTSearch /> */}
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
};

export default Browse;
