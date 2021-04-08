function AboutProject() {
  return (
    <aboutproject className="aboutproject">
      <h3 className="aboutproject__title">О проекте</h3>
      <hr className="aboutproject__line"></hr>
      <div class="aboutproject__description">
        <div class="aboutproject__parts">
            <h4 class="aboutproject__description-title">Дипломный проект включал 5 этапов</h4>
            <p class="aboutproject__description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div class="aboutproject__parts">
            <h4 class="aboutproject__description-title">На выполнение диплома ушло 5 недель</h4>
            <p class="aboutproject__description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div class="aboutproject__diagramm">
        <div class="aboutproject__diagramm-backend">
            <p class="aboutproject__diagramm-backend-duration">1 неделя</p>
            <p class="aboutproject__diagramm-backend-lable">Back-end</p>
        </div>
        <div class="aboutproject__diagramm-frontend">
            <p class="aboutproject__diagramm-frontend-duration">4 недели</p>
            <p class="aboutproject__diagramm-frontend-lable">Front-end</p>
        </div>
      </div>
    </aboutproject>
  );
}

export default AboutProject;
