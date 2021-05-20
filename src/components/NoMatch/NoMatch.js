import { useHistory } from 'react-router-dom';


function NoMatch(props) {

  const history = useHistory();

  const handleGoBack = () => {
    history.goBack()
  }

  return (

    <div className="nomatch">
      <h2 className="nomatch__code">404</h2>
      <p className="nomatch__text">Страница не найдена</p>
      <button onClick={handleGoBack} className="nomatch__back">Назад</button>
        
    </div>
  );
}

export default NoMatch;