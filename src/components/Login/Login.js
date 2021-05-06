import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';

function Login(props) {
  return (

    <div className="login">
        <Header/>

        <h2 className="login__title">Рады видеть!</h2>

        <form className="login__form" method="GET" action="#" name={`${props.name}`} onSubmit={props.onSubmit}>
          <div className="login__icon"></div>
           
            <p className="login__input-name">E-mail</p>
            <input className="login__input" type="email" name="email" placeholder="" maxLength="40" minLength="2" 
            required aria-label="инпут email"/>
           
            <p className="login__input-name">Пароль</p>
            <input className="login__input" maxLength="40" minLength="3" type="password" name="password"
            required aria-label="инпут password"/>
            
            <button className="login__submit-button" type="submit" aria-label="Зарегистрироваться">Войти</button>
            
            <p className="login__enter">Ещё не зарегистрированы? <Link to="/signup" className="login__enter-link">Регистрация</Link></p>
            
        </form>
        
    </div>
  );
}

export default Login;