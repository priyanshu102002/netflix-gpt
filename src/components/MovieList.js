import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies) return;
    const poster_path = movies.results.map((movie) => movie.poster_path);
    return (
        <div className="mt-5">
            <h2 className="text-white text-2xl p-10">{title}</h2>
            <div className="flex  overflow-x-scroll px-10">
                <div className="flex gap-5 bg-transparent">
                    {poster_path.map((path) => (
                        <MovieCard key={path} posterPath={path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
