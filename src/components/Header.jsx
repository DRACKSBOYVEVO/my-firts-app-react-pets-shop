import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/img/doguito.svg'
import '../assets/css/componentes/header.css'

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
  
    const toggleMenu = () => {
      setMenuActive(!menuActive);
    };
  
    return (
      <header className={`header container ${menuActive ? 'menu-header--activo' : ''}`}>
        <div className="menu-hamburguer" onClick={toggleMenu}>
          <span className={`menu-hamburguer__icon ${menuActive ? 'menu-hamburguer--active' : ''}`}></span>
        </div>
        <div className="header-container">
          <Link to="/" className="flex flex--center">
            <img className="header__logo" src={Image} alt="doguito" />
            <h1 className="header__title">Petshop</h1>
          </Link>
        </div>
        <nav className="menu-header">
          <ul className="menu-items">
            <li>
              <Link className="menu-item menu-item--entrar" to="#">Entrar</Link>
            </li>
            <li>
              <Link className="menu-item" to="#">Productos</Link>
            </li>
            <li>
              <Link className="menu-item" to="/">Blog</Link>
            </li>
            <li>
              <Link className="menu-item" to="/sobre">Sobre</Link>
            </li>
          </ul>
          <div className="menu-header__fechar" onClick={toggleMenu}></div>
        </nav>
        <div className={`menu-header-background ${menuActive ? 'menu-header-background--activo' : ''}`} onClick={toggleMenu}></div>
      </header>
    );
  };

export default Header