import React from 'react';
import Header from '../Header/Header.js';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Footer from '../Footer/Footer.js';

function Main(props) {

  return (

    <div className="main">
      <section className="main__promo">
        <Header
          openMobileMenu={props.openMobileMenu}
          mobileMenuIsOpen={props.mobileMenuIsOpen}
          onMobileMenuClose={props.onMobileMenuClose}
          />
        <Promo/>
      </section>
      <section className="main__aboutproject">
        <AboutProject />  
      </section>
      <section className="main__techs">
        <Techs />  
      </section>
      <section className="main__aboutme">
        <AboutMe />  
      </section>
      <section className="main__portfolio">
        <Portfolio />  
      </section>
        <Footer />  
    </div>
  );
}

export default Main;