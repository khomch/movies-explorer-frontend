import Header from '../Header/Header.js';
import React from 'react'; 
import { useHistory, Link } from 'react-router-dom';

function Login(props) {

    //хук управления формой и валидации формы
  
    const [values, setValues] = React.useState({
      email: '',
      password: ''
    });
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    // текст ошибки при вводе недопустимых символов в имя
    const nameError  = 'Имя может содержать только латиницу, кириллицу, пробел или дефис'

    const handleChange = (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      setValues({...values, [name]: value});
      setErrors({...errors, [name]: target.validationMessage});
      setIsValid(target.closest("form").checkValidity());
      if (event.target.validity.patternMismatch) {
        setErrors({...errors, [name]: nameError})
      }
    };
 
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    const { email, password } = values;
    props.handleLogin(email, password, history)
  }

  return (

    <div className="login">
        <Header/>

        <h2 className="login__title">Рады видеть!</h2>

        <form className="login__form" method="GET" action="#" name={`${props.name}`} onSubmit={handleSubmit}>
          <div className="login__icon"></div>
           
            <p className="login__input-name">E-mail</p>
            <input className="login__input" type="email" name="email" placeholder="" maxLength="40" minLength="2" 
            value={values.email} onChange={handleChange} required aria-label="инпут email"/>
            <span className="login___error">{errors.email}</span>
           
            <p className="login__input-name">Пароль</p>
            <input className="login__input" maxLength="40" minLength="3" type="password" name="password"
            value={values.password} onChange={handleChange} required aria-label="инпут password"/>
            <span className="login___error">{errors.password}</span>
            
            <span className="login___server-error">{props.errorMessage}</span>
            <button className={isValid ? "login__submit-button" : "login__submit-button login__submit-button_inactive"} type="submit" aria-label="Зарегистрироваться">Войти</button>
            
            <p className="login__enter">Ещё не зарегистрированы? <Link to="/signup" className="login__enter-link">Регистрация</Link></p>
            
        </form>
        
    </div>
  );
}

export default Login;