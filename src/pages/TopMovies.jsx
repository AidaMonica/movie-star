import React from 'react'
import { useParams } from 'react-router-dom'
import { getTopMovieIdsByYear } from '../api/endpoints';
import MoviesList from '../components/MoviesList';
import PageTitle from '../components/PageTitle';

export function TopMovies() {
  const { year } = useParams();
  const movieIds = getTopMovieIdsByYear(year);

  return (
    <div>
      <PageTitle title={`Top movies ${year}`} />
      <MoviesList movieIds={movieIds} />
    </div>
  )
}
