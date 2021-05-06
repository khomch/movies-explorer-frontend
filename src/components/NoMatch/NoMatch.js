import { Link } from 'react-router-dom';

function NoMatch(props) {

  return (

    <div className="nomatch">
      <h2 className="nomatch__code">404</h2>
      <p className="nomatch__text">Страница не найдена</p>
      <Link to="/" className="nomatch__back">Назад</Link>
        
    </div>
  );
}

export default NoMatch;