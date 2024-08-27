import React from 'react'
import { getFavoriteMovies } from '../lib/favorites'
import MoviesList from '../components/MoviesList';

export function Favorites() {
  const movieIds = getFavoriteMovies();

  return (
    <div>
      {movieIds.length > 0 ? <MoviesList movieIds={movieIds} /> : 'Nu aveti niciun film salvat la fovorite' }
    </div>
  )
}
