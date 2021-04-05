import React from "react";
import searchFormIcon from "../../images/search-film-icon.svg";

function SearchForm() {
  return (
    <searchform class="searchform">
      <input class="searchform__film" placeholder="Фильм"></input>
      <img
        className="searchform__icon"
        src={searchFormIcon}
        alt="лого поиска"
      ></img>
      <button type="button" className="searchform__button">Найти</button>
      <div className="searchform__checkbox-block">
      <input type="checkbox" class="searchform__checkbox" id="checkbox" name="checkbox" value="yes"></input>
      <label class="searchform__lable" for="checkbox"></label>
      <p className="searchform__text">Короткометражки</p>
      </div>
    </searchform>
  );
}

export default SearchForm;
