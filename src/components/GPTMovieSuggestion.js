import React from "react";
import { useSelector } from "react-redux";
import GptMovieList from "./GptMovieList";

const GPTMovieSuggestion = () => {
    const showGptMovies = useSelector((store) => store.gpt.gptSuggestedMovies);
    const tmdbMovies = useSelector((store) => store.gpt.tmdbSuggestedMovies);
    if (!showGptMovies || !tmdbMovies) return;

    console.log(showGptMovies.map(item =>  item));
    console.log(tmdbMovies.map(item => item));

    return (
        <div className="  text-white w-full">
            <div>
                {showGptMovies.map((movieName, index) => (
                    <GptMovieList
                        key={movieName}
                        title={movieName}
                        movies={tmdbMovies[index]}
                    />
                ))}
            </div>
        </div>
    );
};

export default GPTMovieSuggestion;
