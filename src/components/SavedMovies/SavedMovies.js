import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ isSavedMovies, savedMovies, handleCardDelete, handleFindSavedMovies }) {
  return (
    <div className="movies">
      <SearchForm handleFindSavedMovies={handleFindSavedMovies} isSavedMovies={isSavedMovies} savedMovies={savedMovies} />
      <MoviesCardList isSavedMovies={isSavedMovies} savedMovies={savedMovies} handleCardDelete={handleCardDelete} />
    </div>
  );
}

export default SavedMovies;
