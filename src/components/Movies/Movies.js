import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React from "react";

function Movies({
  isSavedMovies,
  isMovieLike,
  likeMovieHandle,
  movies,
  handleUpdateFindWord,
  handleAddMovie,
  handleChangeCountMovies,
  countmovies,
  savedMovies,
  handleCardDeleteFromMovie,
  isGotResult
}) {

 
  return (
    <div className="movies">
      <SearchForm handleUpdateFindWord={handleUpdateFindWord} movies={movies} />
      {movies.length > 0 && (
        <MoviesCardList
          isSavedMovies={isSavedMovies}
          isMovieLike={isMovieLike}
          likeMovieHandle={likeMovieHandle}
          movies={movies}
          handleAddMovie={handleAddMovie}
          handleChangeCountMovies={handleChangeCountMovies}
          countmovies={countmovies}
          savedMovies={savedMovies}
          handleCardDeleteFromMovie={handleCardDeleteFromMovie}
        />
      )}
      {(movies.length === 0 && isGotResult) && (
        <p className="movies__noresult">Ничего не найдено</p>
      )}
    </div>
  );
}

export default Movies;
