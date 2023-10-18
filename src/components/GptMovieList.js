import React from "react";
import MovieCard from "./MovieCard";

const GptMovieList = ({ title, movies }) => {
    if (!movies) return;
    const poster_path = movies.map((movie) => movie.poster_path);
    return (
        <div className="mt-5">
            <h2 className="text-white text-2xl p-10">{title}</h2>
            <div className="flex  overflow-x-scroll px-10">
                <div className="flex gap-5 bg-transparent">
                    {poster_path.map((path) => {
                        return(

                            <MovieCard key={path} posterPath={path} />
                        )
                    }
                        
                    )}
                </div>
            </div>
        </div>
    );
};

export default GptMovieList;
