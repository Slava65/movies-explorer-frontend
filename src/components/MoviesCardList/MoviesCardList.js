import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import examplePicture from "../../images/movies-card-example.jpg";
const movie = {
  nameRU: "33 слова о дизайне",
  duration: "1ч 47м",
  url: examplePicture,
};

function MoviesCardList({ isSavedMovies, isMovieLike, likeMovieHandle }) {
  return (
    <moviescardlist class="moviescardlist">
      <ul className="moviescardlist__list">
        <MoviesCard
          movie={movie}
          isSavedMovies={isSavedMovies}
          isMovieLike={isMovieLike}
          likeMovieHandle={likeMovieHandle}
        />
        <MoviesCard
          movie={movie}
          isSavedMovies={isSavedMovies}
          isMovieLike={isMovieLike}
          likeMovieHandle={likeMovieHandle}
        />
        <MoviesCard
          movie={movie}
          isSavedMovies={isSavedMovies}
          isMovieLike={isMovieLike}
          likeMovieHandle={likeMovieHandle}
        />
        <MoviesCard
          movie={movie}
          isSavedMovies={isSavedMovies}
          isMovieLike={isMovieLike}
          likeMovieHandle={likeMovieHandle}
        />
        <MoviesCard
          movie={movie}
          isSavedMovies={isSavedMovies}
          isMovieLike={isMovieLike}
          likeMovieHandle={likeMovieHandle}
        />
        <MoviesCard
          movie={movie}
          isSavedMovies={isSavedMovies}
          isMovieLike={isMovieLike}
          likeMovieHandle={likeMovieHandle}
        />
        <MoviesCard
          movie={movie}
          isSavedMovies={isSavedMovies}
          isMovieLike={isMovieLike}
          likeMovieHandle={likeMovieHandle}
        />
        <MoviesCard
          movie={movie}
          isSavedMovies={isSavedMovies}
          isMovieLike={isMovieLike}
          likeMovieHandle={likeMovieHandle}
        />
        <MoviesCard
          movie={movie}
          isSavedMovies={isSavedMovies}
          isMovieLike={isMovieLike}
          likeMovieHandle={likeMovieHandle}
        />
        <MoviesCard
          movie={movie}
          isSavedMovies={isSavedMovies}
          isMovieLike={isMovieLike}
          likeMovieHandle={likeMovieHandle}
        />
        <MoviesCard
          movie={movie}
          isSavedMovies={isSavedMovies}
          isMovieLike={isMovieLike}
          likeMovieHandle={likeMovieHandle}
        />
        <MoviesCard
          movie={movie}
          isSavedMovies={isSavedMovies}
          isMovieLike={isMovieLike}
          likeMovieHandle={likeMovieHandle}
        />
      </ul>
      <button type="button" className="moviescardlist__else" aria-label="Еще">
        Еще
      </button>
    </moviescardlist>
  );
}

export default MoviesCardList;
