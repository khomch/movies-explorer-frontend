function Footer(props) {
  
  return (
  
    <footer className="footer__content">
      <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__credentials">
      <p className="footer__copyright">	&copy; 2020</p>
      <ul className="footer__links">
        <li className="footer__link-container"><a href="https://praktikum.yandex.ru/" target="blank" className="footer__link">Яндекс.Практикум</a></li>
        <li className="footer__link-container"><a href="https://github.com/" target="blank" className="footer__link">Github</a></li>
        <li className="footer__link-container"><a href="https://www.facebook.com/" target="blank" className="footer__link">Facebook</a></li>
      </ul>
      </div>
    </footer>

  );
}

export default Footer;