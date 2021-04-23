import React from "react";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error from "../Error/Error";
import { Switch } from "react-router";
import { Route, useHistory } from "react-router-dom";
import { moviesapi } from "../../utiles/MoviesApi";
import { mainapi } from "../../utiles/MainApi";
import ProtectedRoute from "../ProtectedRoute";
import Preloader from "../Preloader/Preloader";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMovieLike, setIsMovieLike] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [countmovies, setCountmovies] = React.useState(3);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    let jwt = localStorage.getItem("jwt");
    if (jwt) {
      tokenCheck(jwt);
    } else {
      history.push("/signin");
    }
  }, []);

  React.useEffect(() => {
    mainapi
      .getInitialMovies()
      .then((res) => {
        setSavedMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn]);

  React.useEffect(() => {
    mainapi
      .getInfoUser()
      .then((user) => {
        setCurrentUser(user.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn]);

  function onRegister(data) {
    const { email, name, password } = data;
    return mainapi
      .register(email, name, password)
      .then((res) => {
        history.push("/movies");
      })
      .catch(() => {
        setLoggedIn(false);
      });
  }

  function onLogin(data) {
    const { email, password } = data;
    return mainapi
      .authorize(email, password)
      .then((res) => {
        let jwt = res.token;
        tokenCheck(jwt);
        localStorage.setItem("jwt", jwt);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function tokenCheck(jwt) {
    mainapi
      .getContent(jwt)
      .then((res) => {
        setCurrentUser(res.data);
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch(() => {
        localStorage.removeItem("jwt", jwt);
        history.push("/signin");
      });
  }

  function handleChangeCountMovies() {
    const newCountmovies = countmovies + 3;
    setCountmovies(newCountmovies);
  }

  function handleUpdateFindWord(word, isChecked) {
    setIsLoading(true);
    moviesapi
      .getInitialMovies()
      .then((res) => {
        setIsLoading(false);
        if (res) {
          const convertedRes = moviesConvert(res);
          const filteredRes = findMovies(convertedRes, word, isChecked);
          setMovies(filteredRes);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleFindSavedMovies(word, isChecked) {
    setIsLoading(true);
    const filteredMovies = findMovies(savedMovies, word, isChecked);
    setSavedMovies(filteredMovies);
    setIsLoading(false);
  }

  function moviesConvert(movies) {
    return movies.map((movie) => {
      return {
        country: movie.country || "",
        created_at: movie.created_at,
        description: movie.description || "",
        director: movie.director || "",
        duration: movie.duration,
        id: movie.id,
        image: movie.image || "",
        nameEN: movie.nameEN || "",
        nameRU: movie.nameRU || "",
        trailerLink: movie.trailerLink,
        updated_at: movie.updated_at,
        year: movie.year || "",
      };
    });
  }

  function findMovies(movies, word, isChecked) {
    return movies.filter((movie) => {
      return finder(movie, word, isChecked);
    });
  }

  function finder(movie, word, isChecked) {
    const {
      country,
      director,
      description,
      duration,
      nameRU,
      nameEN,
      year,
    } = movie;
    const lowerCasedWord = word.toLowerCase();
    if (
      country &&
      country.toLowerCase().includes(lowerCasedWord) &&
      (isChecked ? duration <= 40 : !isChecked)
    ) {
      return true;
    }
    if (
      director &&
      director.toLowerCase().includes(lowerCasedWord) &&
      (isChecked ? duration <= 40 : !isChecked)
    ) {
      return true;
    }
    if (
      nameRU &&
      nameRU.toLowerCase().includes(lowerCasedWord) &&
      (isChecked ? duration <= 40 : !isChecked)
    ) {
      return true;
    }
    if (
      nameEN &&
      nameEN.toLowerCase().includes(lowerCasedWord) &&
      (isChecked ? duration <= 40 : !isChecked)
    ) {
      return true;
    }
    if (
      description &&
      description.toLowerCase().includes(lowerCasedWord) &&
      (isChecked ? duration <= 40 : !isChecked)
    ) {
      return true;
    }
    if (
      year &&
      year.toLowerCase().includes(lowerCasedWord) &&
      (isChecked ? duration <= 40 : !isChecked)
    ) {
      return true;
    }
  }

  function handleAddMovie(movie) {
    mainapi
      .addMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(movieId, movie) {
    mainapi
      .deleteMovie(movieId)
      .then((data) => {
        const currentSavedMovies = savedMovies.filter((c) => {
          return c._id !== movie._id;
        });
        setSavedMovies(currentSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDeleteFromMovie(movieId, movie) {
    const currentMovie = savedMovies.filter((c) => {
      return c.id === movieId;
    });
    mainapi
      .deleteMovie(currentMovie._id)
      .then((res) => {
        const currentMovies = movies.filter((c) => {
          return c.id !== movie.id;
        });
        setMovies(currentMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onUpdateUser(newData) {
    mainapi
      .updateUser(newData)
      .then((info) => {
        setCurrentUser(info.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function likeMovieHandle() {
    if (isMovieLike === false) {
      setIsMovieLike(true);
    } else {
      setIsMovieLike(false);
    }
  }

  function headerToSignIn() {
    history.push("/signin");
  }

  function onSignOut() {
    localStorage.removeItem("jwt");
    history.push("/signin");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header headerToSignIn={headerToSignIn} />
            <Main />
            <Footer />
          </Route>
          <Route path="/movies">
            <Header
              isMenuOpen={isMenuOpen}
              openMenu={openMenu}
              closeMenu={closeMenu}
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              isSavedMovies={false}
              isMovieLike={isMovieLike}
              likeMovieHandle={likeMovieHandle}
              movies={movies}
              handleUpdateFindWord={handleUpdateFindWord}
              handleAddMovie={handleAddMovie}
              handleChangeCountMovies={handleChangeCountMovies}
              countmovies={countmovies}
              savedMovies={savedMovies}
              handleCardDeleteFromMovie={handleCardDeleteFromMovie}
              component={Movies}
            />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header
              isMenuOpen={isMenuOpen}
              openMenu={openMenu}
              closeMenu={closeMenu}
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              isSavedMovies={true}
              savedMovies={savedMovies}
              handleUpdateFindWord={handleUpdateFindWord}
              handleCardDelete={handleCardDelete}
              handleFindSavedMovies={handleFindSavedMovies}
              component={SavedMovies}
            />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header
              isMenuOpen={isMenuOpen}
              openMenu={openMenu}
              closeMenu={closeMenu}
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              onUpdateUser={onUpdateUser}
              onSignOut={onSignOut}
              component={Profile}
            />
          </Route>
          <Route path="/signup">
            <Register onRegister={onRegister} />
          </Route>
          <Route path="/signin">
            <Login handleLogin={onLogin} />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
        </Switch>
        {isLoading && <Preloader />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
