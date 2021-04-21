import React from "react";
import { Link } from "react-router-dom";

function Login({ handleLogin }) {

  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
  };


  return (
    <form className="login" onSubmit={handleSubmit} >
      <Link to={"/"} className="login__link">
        <button
          type="button"
          className="login__logo"
          aria-label="О проекте"
        ></button>
      </Link>
      <h2 className="login__title">Рады видеть!</h2>
      <p className="login__data-lable">E-mail</p>
      <input
        className="login__data"
        id="email"
        type="text"
        name="email"
        onChange={handleChange}
      ></input>
      <p className="login__data-lable">Пароль</p>
      <input
        className="login__data login__data_password"
        id="password"
        type="password"
        name="password"
        onChange={handleChange}
      ></input>
      <label className="login__error">Что-то пошло не так ...</label>
      <button type="submit" className="login__finish">
        Войти
      </button>
      <div className="login__register">
        <p className="login__register-text">Ещё не зарегистрированы?</p>
        <Link
          to={"/signin"}
          className="login__register-text login__register-text_signup"
        >
          Регистрация
        </Link>
      </div>
    </form>
  );
}

export default Login;
