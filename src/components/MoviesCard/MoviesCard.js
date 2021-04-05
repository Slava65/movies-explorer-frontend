import React from "react";

function MoviesCard({ movie, isSavedMovies} ) {
  return (
    <li className="moviescard">
      <article>
        <div className="moviescard__header">
          <div className="moviescard__info">
            <h5 className="moviescard__title">{movie.nameRU}</h5>
            <p className="moviescard__duration">{movie.duration}</p>
          </div>
          <button
            type="button"
            className= {`moviescard__save ${isSavedMovies && "moviescard__save_delete"}`}
            aria-label="Сохранить"
          ></button>
        </div>
        <img className="moviescard__image" alt={movie.nameRU} src={movie.url} />
      </article>
    </li>
  );
}

export default MoviesCard;
