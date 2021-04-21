import { useCallback } from "react";
import { Link } from "react-router-dom";
import React from "react";

function Register({ onRegister }) {
  function useFormWithValidation() {
    const [data, setData] = React.useState({
      email: "",
      name: "",
      password: "",
    });
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (e) => {
      const target = e.target;
      const { name, value } = target;
      setData({
        ...data,
        [name]: value,
      });
      setErrors({ ...errors, [name]: target.validationMessage });
      setIsValid(target.closest("register").checkValidity());
    };

    const resetForm = useCallback(
      (newValues = {}, newErrors = {}, newIsValid = false) => {
        setData(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
      },
      [setData, setErrors, setIsValid]
    );

    return { data, handleChange, errors, isValid, resetForm };
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let { email, name, password } = data;
  //   onRegister({ email, name, password });
  // };

  return (
    <form className="register" 
    // onSubmit={handleSubmit}
    >
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
        // onChange={handleChange}
      ></input>
      <p className="register__data-lable">E-mail</p>
      <input
        className="register__data"
        id="email"
        type="text"
        name="email"
        // onChange={handleChange}
      ></input>
      <p className="register__data-lable">Пароль</p>
      <input
        className="register__data register__data_password"
        id="password"
        type="password"
        name="password"
        // onChange={handleChange}
      ></input>
      <label className="register__error">Что-то пошло не так ...</label>
      <button type="submit" className="register__finish">
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
