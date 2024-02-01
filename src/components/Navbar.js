/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Logo from './img/logo/logo.png';
import styles from './style/Navbar.module.css';
import { Link } from 'react-router-dom';



function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  
  
  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  
  return (
    <header className={styles.container}>
      <Link to='/' onClick={closeMobileMenu}>
        <img src={Logo} alt="Logo marca Value Ware" className={styles.logoValueWare} />
      </Link>

      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
        ☰
      </div>

      <ul className={`${styles.navList} ${showMobileMenu ? styles.showMobileMenu : ''}`}>
        <li>
          <Link to='/SobreNos' onClick={closeMobileMenu}>
          Institucional
          </Link>
        </li>
        <li>
          <Link to='/Vmo' onClick={closeMobileMenu}>
            Value Management Officer
          </Link>
        </li>

        <li className={styles.dropdown}>
          <Link to='/MbaEcursos' onClick={closeMobileMenu}>
            MBAs e Cursos
          </Link>
        </li>

        <li>
          <Link to='/Contate-nos' onClick={closeMobileMenu}>
            Contatos
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
