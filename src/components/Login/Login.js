import { Link } from "react-router-dom";

function Login() {
  return (
    <form className="login">
      <Link to={"/"} className="login__link">
        <button
          type="button"
          className="register__logo"
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
      ></input>
      <p className="login__data-lable">Пароль</p>
      <input
        className="login__data login__data_password"
        id="password"
        type="password"
        name="password"
      ></input>
      <label className="login__error">Что-то пошло не так ...</label>
      <button type="button" className="login__finish">
        Зарегистрироваться
      </button>
      <div className="login__register">
        <p class="login__register-text">Ещё не зарегистрированы?</p>
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
