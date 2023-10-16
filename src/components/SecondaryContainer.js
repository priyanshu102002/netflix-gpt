import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  
  return (
    <div className='-mt-44 relative z-100' >
      <MovieList title = "Recent Movies" movies={movies.nowPlayingMovies}/>
      <MovieList title = "Latest Series" movies={movies.latestSeries}/>
      <MovieList title = "Popular Movies" movies={movies.popularMovies}/>
      <MovieList title = "Top Rated Movies" movies={movies.topRatedMovies}/>
      <MovieList title = "Upcomming Movies" movies={movies.upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer