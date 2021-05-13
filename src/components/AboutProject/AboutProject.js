function AboutProject(props) {
  
  return (
  
    <div className="aboutproject__content" id="about">
      <h2 className="aboutproject__title">О проекте</h2>
      <h3 className="aboutproject__subtitle-phases">Дипломный проект включал 5 этапов</h3>
      <h3 className="aboutproject__subtitle-weeks">На выполнение диплома ушло 5 недель</h3>
      <p className="aboutproject__text-plan">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      <p className="aboutproject__text-deadlines">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      <div className="aboutproject__timeline">
        <p className="aboutproject__timeline-one-week">1 неделя</p>
        <p className="aboutproject__timeline-back-end">Back-end</p>
        <p className="aboutproject__timeline-four-weeks">4 недели</p>
        <p className="aboutproject__timeline-front-end">Front-end</p>
      </div>
    </div>

  );
}

export default AboutProject;