import React from 'react'
import { useParams } from 'react-router-dom'
import { getTopMovieIdsByYear } from '../api/endpoints';
import MoviesList from '../components/MoviesList';

export function TopMovies() {
  const { year } = useParams();
  const movieIds = getTopMovieIdsByYear(year);

  return (
    <div>
      <MoviesList movieIds={movieIds} />
    </div>
  )
}
