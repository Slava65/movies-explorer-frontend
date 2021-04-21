import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
function Profile({ onUpdateUser, onSignOut }) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleSubmitProfile(e) {
    e.preventDefault();
    console.log(name)
    onUpdateUser({
      name: name,
      email: email,
    });
  }

  return (
    <form className="profile" onSubmit={handleSubmitProfile}>
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <div className="profile__data">
        <input className="profile__name" value={name} onChange={handleChangeName} />
        <p className="profile__lable-name">Имя</p>
        <hr className="profile__line"></hr>
        <input className="profile__email" value={email} onChange={handleChangeEmail} />
        <p className="profile__lable-mail">Почта</p>
      </div>
      <div className="profile__manage-block">
        <button type="submit" className="profile__edit">
          Редактировать
        </button>
        <Link to={"/"} className="profile__exit" onClick={onSignOut}>
          Выйти из аккаунта
        </Link>
      </div>
    </form>
  );
}

export default Profile;
