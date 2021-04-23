import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCard({
  movie,
  isSavedMovies,
  handleAddMovie,
  handleCardDelete,
  getIsSaved,
  handleCardDeleteFromMovie,
}) {
  const baseUrl = "https://api.nomoreparties.co";
  const currentUser = React.useContext(CurrentUserContext);

  function addMovie(e) {
    const user = currentUser._id;
    const newMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${baseUrl}${movie.image.url}`,
      trailer: movie.trailerLink,
      thumbnail: `${baseUrl}${movie.image.formats.thumbnail.url}`,
      owner: user,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
    e.preventDefault();
    console.log(newMovie);
    handleAddMovie(newMovie);
  }

  function deleteFromSavedMovie() {
    handleCardDelete(movie._id, movie);
  }

  function deleteFromMovie() {
    handleCardDeleteFromMovie(movie.id, movie);
    console.log(movie.id, movie)
  }

  let isSavedMovie = getIsSaved(movie.id);
  return (
    <li className="moviescard">
      <article>
        <div className="moviescard__header">
          <div className="moviescard__info">
            <h5 className="moviescard__title">{movie.nameRU}</h5>
            <p className="moviescard__duration">{movie.duration}</p>
          </div>
          {isSavedMovies && (
            <button
              type="button"
              className="moviescard__save moviescard__save_delete"
              aria-label="Сохранить"
              onClick={deleteFromSavedMovie}
            ></button>
          )}
          {!isSavedMovie && (
            <button
            type="button"
            className={`moviescard__save ${isSavedMovie && "moviescard__save_active"}`}
            aria-label="Сохранить"
            onClick={
              (isSavedMovies ? deleteFromMovie : addMovie)
            }
          ></button>
          )}

          {/* <button
            type="button"
            className={`moviescard__save ${
              isSavedMovies && "moviescard__save_delete"
            } ${isSavedMovie && "moviescard__save_active"}`}
            aria-label="Сохранить"
            onClick={
              (isSavedMovie && deleteFromMovie) ||
              (isSavedMovies ? deleteFromSavedMovie : addMovie)
            }
          ></button> */}
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
