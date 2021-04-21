import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h5 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h5>
      <hr className="footer__line"></hr>
      <div className="footer__menu-block">
        <p className="footer__year">&copy; 2020</p>
        <nav className="footer__menu">
          <Link to={"https://praktikum.yandex.ru/"} className="footer__link">
            Яндекс.Практикум
          </Link>
          <Link to={"https://github.com/Slava65"} className="footer__link">
            Github
          </Link>
          <Link to={"https://vk.com/slava_sakh"} className="footer__link">
            Вконтакте
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
