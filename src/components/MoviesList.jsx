import React from 'react'
import { MovieDetails } from './MovieDetails'
import './MoviesList.css'

export default function MoviesList({ movieIds }) {
  return (
    <div className="movies-list">
      {movieIds.map(function (movieId) {
        return <MovieDetails key={movieId} movieId={movieId} />
      })}
    </div>
  )
}
