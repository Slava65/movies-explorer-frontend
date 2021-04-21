import React from "react";

function MoviesCard({
  movie,
  isSavedMovies,
  isMovieLike,
  handleAddMovie,
  handleCardDelete,
  getIsSaved
}) {
  const baseUrl = "https://api.nomoreparties.co";

  function addMovie(e) {
    const newMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${baseUrl}${movie.image.url}`,
      trailer: movie.trailerLink,
      thumbnail: `${baseUrl}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
    e.preventDefault();
    console.log(newMovie);
    handleAddMovie(newMovie);
  }

  function deleteMovie() {
    handleCardDelete(movie._id, movie);
  }

  const isSavedMovie = getIsSaved(movie.id);
  return (
    <li className="moviescard">
      <article>
        <div className="moviescard__header">
          <div className="moviescard__info">
            <h5 className="moviescard__title">{movie.nameRU}</h5>
            <p className="moviescard__duration">{movie.duration}</p>
          </div>
          <button
            type="button"
            className={`moviescard__save ${
              isSavedMovies && "moviescard__save_delete"
            } ${isSavedMovie && "moviescard__save_active"}`}
            aria-label="Сохранить"
            onClick={isSavedMovies ? deleteMovie : addMovie}
          ></button>
        </div>
        <img
          className="moviescard__image"
          alt={movie.nameRU}
          src={
            isSavedMovies ? `${movie.image}` : `${baseUrl}${movie.image.url}`
          }
        />
      </article>
    </li>
  );
}

export default MoviesCard;
