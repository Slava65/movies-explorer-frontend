import React from "react";
import searchFormIcon from "../../images/search-film-icon.svg";

function SearchForm({ handleUpdateFindWord, handleFindSavedMovies, isSavedMovies }) {
  const [word, setWord] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);

  function handleChangeWord(e) {
    setWord(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    isSavedMovies ? handleFindSavedMovies(word, isChecked) : handleUpdateFindWord(word, isChecked);
  }

  function handleTurnCheckbox() {
    if (!isChecked) {
      setIsChecked(true);
    } 
    else {
      setIsChecked(false);
    }
  }

  return (
    <form className="searchform" onSubmit={handleSubmit}>
      <input
        className="searchform__film"
        placeholder="Фильм"
        required
        value={word}
        onChange={handleChangeWord}
      ></input>
      <img
        className="searchform__icon"
        src={searchFormIcon}
        alt="лого поиска"
      ></img>
      <button type="submit" className="searchform__button">
        Найти
      </button>
      <div className="searchform__checkbox-block" >
        <input
          type="checkbox"
          className="searchform__checkbox"
          id="checkbox"
          name="checkbox"
          value={isChecked}
          onClick={handleTurnCheckbox}
        ></input>
        <label className="searchform__lable" htmlFor="checkbox"></label>
        <p className="searchform__text">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
