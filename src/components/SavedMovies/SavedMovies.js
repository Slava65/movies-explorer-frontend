import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ isSavedMovies }) {
  return (
    <savedmovies className="movies">
      <SearchForm />
      <MoviesCardList isSavedMovies={isSavedMovies} />
    </savedmovies>
  );
}

export default SavedMovies;
