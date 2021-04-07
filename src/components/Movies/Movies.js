import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ isSavedMovies, isMovieLike, likeMovieHandle }) {
  return (
    <movies className="movies">
      <SearchForm />
      <MoviesCardList
        isSavedMovies={isSavedMovies}
        isMovieLike={isMovieLike}
        likeMovieHandle={likeMovieHandle}
      />
    </movies>
  );
}

export default Movies;
