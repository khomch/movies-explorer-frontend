function Techs(props) {
  
  return (
  
    <div className="techs__content">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__lead">7 технологий</h3>
      <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__7-technologies">
        <li className="techs__technology">HTML</li>
        <li className="techs__technology">CSS</li>
        <li className="techs__technology">JS</li>
        <li className="techs__technology">React</li>
        <li className="techs__technology">Git</li>
        <li className="techs__technology">Express.js</li>
        <li className="techs__technology">MongoDB</li>
      </ul>
    </div>
  );
}

export default Techs;