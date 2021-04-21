import itemIcon from "../../images/portfolio__item_icon.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__lable">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <p className="portfolio__text">
            Статичный сайт
            <img
              className="portfolio__icon"
              src={itemIcon}
              alt="Стрелка элемента"
            ></img>
          </p>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__text">
            Адаптивный сайт
            <img
              className="portfolio__icon"
              src={itemIcon}
              alt="Стрелка элемента"
            ></img>
          </p>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__text">
            Одностраничное приложение
            <img
              className="portfolio__icon"
              src={itemIcon}
              alt="Стрелка элемента"
            ></img>
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
