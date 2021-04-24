import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

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
}) {
  return (
    <div className="movies">
      <SearchForm handleUpdateFindWord={handleUpdateFindWord} movies={movies} />
      {(movies.length > 0) && (
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
    </div>
  );
}

export default Movies;
