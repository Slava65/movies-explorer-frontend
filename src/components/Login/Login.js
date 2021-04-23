import React from "react";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../utiles/validation";

function Login({ handleLogin }) {
  const validation = useFormWithValidation();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(validation.data);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
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
        onChange={validation.handleChange}
        required
      ></input>
      <p className="login__data-lable">Пароль</p>
      <input
        className="login__data login__data_password"
        id="password"
        type="password"
        name="password"
        onChange={validation.handleChange}
        required
      ></input>
      <label className="login__error">Что-то пошло не так ...</label>
      <button type="submit" className={`login__finish ${validation.isValid && "login__finish_active"}`}>
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
