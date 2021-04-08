import React from "react";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <form className="profile">
      <h2 className="profile__title">Привет, Вячеслав!</h2>
      <div className="profile__data">
        <input className="profile__name" value="Вячеслав"></input>
        <p className="profile__lable-name">Имя</p>
        <hr className="profile__line"></hr>
        <input className="profile__email" value="slava-sakh@yandex.ru"></input>
        <p className="profile__lable-mail">Почта</p>
      </div>
      <div class="profile__manage-block">
        <button type="submit" className="profile__edit">
          Редактировать
        </button>
        <Link to={"/"} className="profile__exit">
          Выйти из аккаунта
        </Link>
      </div>
    </form>
  );
}

export default Profile;
