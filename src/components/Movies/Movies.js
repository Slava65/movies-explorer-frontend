import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ isSavedMovies }) {
  return (
    <movies className="movies">
      <SearchForm />
      <MoviesCardList isSavedMovies={isSavedMovies} />
    </movies>
  );
}

export default Movies;
