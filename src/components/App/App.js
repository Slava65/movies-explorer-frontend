import React from "react";
import "./App.css";
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
import { Route } from "react-router-dom";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header
            isMenuOpen={isMenuOpen}
            openMenu={openMenu}
            closeMenu={closeMenu}
          />
          <Movies isSavedMovies="" />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header
            isMenuOpen={isMenuOpen}
            openMenu={openMenu}
            closeMenu={closeMenu}
          />
          <SavedMovies isSavedMovies="true" />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header
            isMenuOpen={isMenuOpen}
            openMenu={openMenu}
            closeMenu={closeMenu}
          />
          <Profile />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
