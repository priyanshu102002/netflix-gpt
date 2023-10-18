import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'

const GPTSearch = () => {
    return (
        <div className=' w-full '>
        <GPTSearchBar />
        <GPTMovieSuggestion />
        </div>
    )
}

export default GPTSearch