import { Link } from "react-router-dom";
import React from "react";
import useFormWithValidation from "../../utiles/validation";

function Register({ onRegister }) {
  const validation = useFormWithValidation();
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(validation.data);
  };

  return (
    <form className="register" onSubmit={handleSubmit}>
      <Link to={"/"} className="register__link">
        <button
          type="button"
          className="register__logo"
          aria-label="О проекте"
        ></button>
      </Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <p className="register__data-lable">Имя</p>
      <input
        className="register__data"
        id="name"
        type="text"
        name="name"
        onChange={validation.handleChange}
        required
      ></input>
      <p className="register__data-lable">E-mail</p>
      <input
        className="register__data"
        id="email"
        type="text"
        name="email"
        onChange={validation.handleChange}
        required
      ></input>
      <p className="register__data-lable">Пароль</p>
      <input
        className="register__data register__data_password"
        id="password"
        type="password"
        name="password"
        onChange={validation.handleChange}
        required
      ></input>
      <label className="register__error">Что-то пошло не так ...</label>
      <button type="submit" className={`register__finish ${validation.isValid && "register__finish_active"}`}>
        Зарегистрироваться
      </button>
      <div className="register__login">
        <p className="register__login-text">Уже зарегистрированы?</p>
        <Link
          to={"/signin"}
          className="register__login-text register__login-text_signin"
        >
          Войти
        </Link>
      </div>
    </form>
  );
}

export default Register;
