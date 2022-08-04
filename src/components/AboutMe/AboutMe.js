import avatar from '../../images/avatar.png';

function AboutMe(props) {
  
  return (
  
    <div className="aboutme__content">
      <h2 className="aboutme__title">Веб-разработчик</h2>
      <h3 className="aboutme__name">Антон</h3>
      <p className="aboutme__occupation">Фронтенд-разработчик, 30 лет</p>
      <p className="aboutme__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
      <img src={avatar} alt="Виталий, фронтенд-разработчик" className="aboutme__avatar"/> 
      <ul className="aboutme__links">
        <li><a href="https://www.facebook.com/" target="blank" className="aboutme__link">Facebook</a></li>
        <li><a href="https://github.com/" target="blank" className="aboutme__link">Github</a></li>
      </ul>
    </div>

  );
}

export default AboutMe;