import React from 'react'
import { getTopMovieIdsAllTime } from '../api/endpoints'
import MoviesList from '../components/MoviesList';

export function Home() {
  const movieIds = getTopMovieIdsAllTime();

  return (
    <div>
      <MoviesList movieIds={movieIds} />
    </div>
  )
}
