import React from 'react'
import { getTopMovieIdsAllTime } from '../api/endpoints'
import MoviesList from '../components/MoviesList';
import PageTitle from '../components/PageTitle';

export function Home() {
  const movieIds = getTopMovieIdsAllTime();

  return (
    <div>
      <PageTitle title="Welcome to Movie Star!" />
      <MoviesList movieIds={movieIds} />
    </div>
  )
}
