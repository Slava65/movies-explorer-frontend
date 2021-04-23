import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  isSavedMovies,
  isMovieLike,
  likeMovieHandle,
  movies,
  handleAddMovie,
  handleChangeCountMovies,
  countmovies,
  savedMovies,
  handleCardDelete,
  handleCardDeleteFromMovie
}) {
  function getIsSaved(id) {
    const a = savedMovies.filter((movie) => {
      return movie.movieId === id;
    });
    if (a.length === 0) {
      return false
    } else {
      return true
    }
  }

  function addMovies() {
    handleChangeCountMovies(countmovies);
  }

  return (
    <section className="moviescardlist">
      <ul className="moviescardlist__list">
        {!isSavedMovies &&
          movies
            .filter((movie, id) => id < countmovies)
            .map((movie) => (
              <MoviesCard
                key={movie._id}
                movie={movie}
                isSavedMovies={isSavedMovies}
                isMovieLike={isMovieLike}
                likeMovieHandle={likeMovieHandle}
                handleAddMovie={handleAddMovie}
                getIsSaved={getIsSaved}
                handleCardDeleteFromMovie={handleCardDeleteFromMovie}
              />
            ))}
        {isSavedMovies &&
          savedMovies.map((movie) => (
            <MoviesCard
              key={movie._id}
              movie={movie}
              isSavedMovies={isSavedMovies}
              isMovieLike={isMovieLike}
              likeMovieHandle={likeMovieHandle}
              handleAddMovie={handleAddMovie}
              handleCardDelete={handleCardDelete}
              getIsSaved={getIsSaved}
            />
          ))}
      </ul>
      {!isSavedMovies && (
        <button
          type="button"
          className="moviescardlist__else"
          aria-label="Еще"
          onClick={addMovies}
        >
          Еще
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
