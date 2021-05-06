function Portfolio(props) {
  
  return (
  
    <div className="portfolio__content">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-container"><a href="https://github.com/" target="blank" className="portfolio__link">Статичный сайт</a></li>
        <li className="portfolio__link-container"><a href="https://github.com/" target="blank" className="portfolio__link">Адаптивный сайт</a></li>
        <li className="portfolio__link-container"><a href="https://github.com/" target="blank" className="portfolio__link">Одностраничное приложение</a></li>
      </ul>
    </div>

  );
}

export default Portfolio;