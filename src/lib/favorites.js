const FAV_MOVIES_KEY = "favMovies";

export function getFavoriteMovies() {
  const storedFavMovies = localStorage.getItem(FAV_MOVIES_KEY);

  if (!storedFavMovies) {
    return [];
  }

  const favMovies = JSON.parse(storedFavMovies);

  if (!Array.isArray(favMovies)) {
    return [];
  }

  return favMovies;
}

export function isFavoriteMovie(movieId) {
  return getFavoriteMovies().includes(movieId);
}

export function addFavoriteMovie(movieId) {
  const favMovies = getFavoriteMovies();

  if (favMovies.includes(movieId)) {
    return;
  }

  localStorage.setItem(FAV_MOVIES_KEY, JSON.stringify([...favMovies, movieId]))
}

export function removeFavoriteMovie(movieId) {
  const favMovies = getFavoriteMovies();

  if (!favMovies.includes(movieId)) {
    return;
  }

  const newFavMovies = favMovies.filter(function (id) {
    return id !== movieId
  })

  localStorage.setItem(FAV_MOVIES_KEY, JSON.stringify(newFavMovies))
}