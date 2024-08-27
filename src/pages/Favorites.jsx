import React from 'react'
import { getFavoriteMovies } from '../lib/favorites'
import MoviesList from '../components/MoviesList';
import PageTitle from '../components/PageTitle';

export function Favorites() {
  const movieIds = getFavoriteMovies();

  return (
    <div>
      <PageTitle title="Your favorite movies" />
      {movieIds.length > 0 ? <MoviesList movieIds={movieIds} /> : <p style={{ textAlign: 'center' }}>You have no favorite movies</p> }
    </div>
  )
}
