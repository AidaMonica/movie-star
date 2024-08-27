import React from 'react'
import { useState } from 'react'
import { addFavoriteMovie, isFavoriteMovie, removeFavoriteMovie } from '../lib/favorites';

export default function FavoriteStar({ movieId }) {
  const [isFavorite, setIsFavorite] = useState(() => isFavoriteMovie(movieId));

  return (
    <img
      className="fav-star"
      src={isFavorite ? "/star-fill.svg" : "/star-outline.svg"}
      height={30}
      onClick={function () {
        setIsFavorite(function (prevIsFavorite) {
          if (prevIsFavorite) {
            removeFavoriteMovie(movieId)
          } else {
            addFavoriteMovie(movieId)
          }

          return !prevIsFavorite
        })
      }}
    />
  )
}
