import React, { useRef } from "react";
import openai from "../utils/openAi";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
    const serachText = useRef(null);
    const dispatch = useDispatch();

    // search movie from tmdb
    const searchMovieTMDB = async (movie) => {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
            OPTIONS
        );
        const json = await response.json();

        return json.results;
    };

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        // console.log(serachText.current.value);

        // const gptQuery =
        //     `Act as a movie Recommendation system and suggest some movie  for the query: ${serachText.current.value} ,only give me the name of 5 movies. comma separated like the example result has given ahead. example result = Don,Sholay,Andhadhun,Run,DDLJ.`

        // const gptResults = await openai.chat.completions.create({
        //     messages: [
        //         {
        //             role: "user",
        //             content: gptQuery ,
        //         },
        //     ],
        //     model: "gpt-3.5-turbo",
        // });

        // const gptMovies =gptResults.choices?.[0].message?.content.split(",");
        // // const gptMovies =["Don","Sholay","Andhadhun","Run","DDLJ"];

        const gptMovies = ["John Wick" , "War" , "Pathan" , "Jawan" , "Hero"];

        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        // [promise,promise,promise,promise,promise]

        const tmdbResults = await Promise.all(promiseArray);

        dispatch(addGptMovieResult({tmdbResults,gptMovies}));
    };

    return (
        <div className="flex w-full justify-center pt-20 items-center">
            <form onSubmit={formSubmitHandler}>
                <input
                    ref={serachText}
                    type="text"
                    className="px-6 py-3 m-4 outline-none rounded-xl"
                    placeholder="What would you like to watch today"
                />
                <button className="px-6 py-3 bg-red-600 text-white rounded-xl">
                    Search
                </button>
            </form>
        </div>
    );
};

export default GPTSearchBar;
