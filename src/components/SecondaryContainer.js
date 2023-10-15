import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies.nowPlayingMovies)
  
  return (
    <div className='-mt-44 relative z-100' >
      <MovieList title = "Now Playing" movies={movies}/>
      <MovieList title = "Trending Movies" movies={movies}/>
      <MovieList title = "Upcomming Movies" movies={movies}/>
      <MovieList title = "Popular Movies" movies={movies}/>
      <MovieList title = "Horror Movies" movies={movies}/>
    </div>
  )
}

export default SecondaryContainer