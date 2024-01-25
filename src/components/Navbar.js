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

  return (
    
    <header className={styles.container}>
      <Link to='/'>
        <img src={Logo} alt="Logo marca Value Ware" className={styles.logoValueWare} />
      </Link>

      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
        ☰
      </div>

      <ul className={`${styles.navList} ${showMobileMenu ? styles.showMobileMenu : ''}`}>
      
        <li>
          <Link to='/Vmo'>Value Management Officer</Link>
        </li>

        <li className={styles.dropdown}>
          <Link to='/MbaEcursos'>MBAs e Cursos</Link>
        </li>

        <li>
          <Link to='/SobreNos'>Sobre-nós</Link>
        </li>
        <li>
          <Link to='/Contate-nos'>Contate-nos</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
