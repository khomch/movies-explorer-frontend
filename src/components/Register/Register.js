import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';

function Register(props) {
  return (

    <div className="register">
        <Header/>

        <h2 className="register__title">Добро пожаловать!</h2>
      
        

        <form className="register__form" method="GET" action="#" name={`${props.name}`} onSubmit={props.onSubmit}>
          <div className="register__icon"></div>

            <p className="register__input-name">Имя</p>
            <input className="register__input" type="text" name="name" placeholder="" maxLength="40" minLength="2" 
            required aria-label="инпут имени"/>
           
            <p className="register__input-name">E-mail</p>
            <input className="register__input" type="email" name="email" placeholder="" maxLength="40" minLength="2" 
            required aria-label="инпут email"/>
           
            <p className="register__input-name">Пароль</p>
            <input className="register__input" maxLength="40" minLength="3" type="password" name="password"
            required aria-label="инпут password"/>
            <p className="register___error">Что-то пошло не так...</p>
            
            <button className="register__submit-button" type="submit" aria-label="Зарегистрироваться">Зарегистрироваться</button>
            
            <p className="register__enter">Уже зарегистрированы? <Link to="/signin" className="register__enter-link">Войти</Link></p>
            
        </form>
        
    </div>
  );
}

export default Register;