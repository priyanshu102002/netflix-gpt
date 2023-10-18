import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptSuggestedMovies: null,
        tmdbSuggestedMovies: null
    },
    reducers: {
        toggleGptSearchView: (state,action) =>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state,action) =>{
            const {tmdbResults,gptMovies} = action.payload
            state.tmdbSuggestedMovies = tmdbResults; 
            state.gptSuggestedMovies = gptMovies;
        }
    }

})

export const {toggleGptSearchView,addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;