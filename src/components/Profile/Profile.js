import Header from '../Header/Header.js';

function Profile(props) {

  return (

    <div className="profile">
        <Header
          openMobileMenu={props.openMobileMenu}
          mobileMenuIsOpen={props.mobileMenuIsOpen}
          onMobileMenuClose={props.onMobileMenuClose}
        />
      <h2 className="profile__title">Привет, Виталий!</h2>
      
        <div className="profile__name">
          <p className="profile__field">Имя</p>
          <p className="profile__field-data">Виталий</p>
        </div>
        <div className="profile__email">
          <p className="profile__field">E-mail</p>
          <p className="profile__field-data">pochta@yandex.ru</p>
        </div>
        <p className="profile__edit">Редактировать</p>
        <p className="profile__exit">Выйти из аккаунта</p>
      
        
    </div>
  );
}

export default Profile;