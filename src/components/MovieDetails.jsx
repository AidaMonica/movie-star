import React, { useEffect, useState } from 'react'
import { getMovieById } from '../api/endpoints';
import './MovieDetails.css'
import FavoriteStar from './FavoriteStar';

export function MovieDetails({ movieId }) {
  const [movie, setMovie] = useState(null)

  useEffect(function () {
    getMovieById(movieId)
      .then(function (response) {
        return response.json()
      })
      .then(function (movieDetails) {
        console.log(movieDetails)
        setMovie(movieDetails)
      })
  }, []);

  if (movie === null) {
    return <p>Loading movie...</p>
  }

  return (
    <div className="movie-card">
      <img className="movie-poster" src={movie.Poster} height={300} />
      <FavoriteStar movieId={movieId} />
      <h3>{movie.Title}</h3>
      <i>{movie.Plot}</i>
      <div className="actors">{movie.Actors}</div>
      <div className='runtime'>
        <img src="/timer.png" height={24} />
        {movie.Runtime}
      </div>
      <div className="genre">{movie.Genre}</div>
    </div>
  )
}
