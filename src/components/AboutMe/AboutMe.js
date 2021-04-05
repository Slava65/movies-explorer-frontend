import { Link } from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";
import myFoto from "../../images/my-foto.jpg";

function AboutMe() {
  return (
    <aboutme className="aboutme">
      <h3 className="aboutme__title">Студент</h3>
      <hr className="aboutme__line"></hr>
      <img className="aboutme__myfoto" src={myFoto} alt="Мое фото"></img>
      <p className="aboutme__name">Вячеслав</p>
      <p className="aboutme__profession">Фронтенд-разработчик, 32 года</p>
      <p className="aboutme__description">
        Я родился в городе Корсаков Сахалинской области. Живу в городе
        Южно-Сахалинске. Я закончил в 2010 году факультет экономики ДВФУ по
        специальности "Прикладная информатика в экономике". Я люблю смотреть
        фильмы, а ещё увлекаюсь пешими и велосипедными прогулками. Более 10 лет
        работаю в банковской сфере. Хочу вернуться в сферу IT-технологий. Почти
        год изучаю веб-разработку на Яндекс-Практикуме.
      </p>
      <nav class="aboutme__menu">
        <Link to={"https://vk.com/slava_sakh"} className="aboutme__link">
          Вконтакте
        </Link>
        <Link to={"https://github.com/Slava65"} className="aboutme__link">
          Github
        </Link>
      </nav>
      <Portfolio />
    </aboutme>
  );
}

export default AboutMe;
