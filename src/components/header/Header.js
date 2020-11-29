import React, { useState } from 'react';
import './header.css';

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [menuActive, setMenuActive] = useState('Home');

  const menuList = [
    { href: '#home', name: 'Home' },
    { href: '#featured', name: 'Featured' },
    { href: '#new', name: 'New' },
    { href: '#subscribed', name: 'Subscribed' },
  ];

  const navMenuHandle = (name) => {
    if (menuActive === name) {
    } else {
      setMenuActive(name);
    }
    setShowMenu(false);
  }

  return (
    <>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#" className="nav__logo">WIXCOMMERCE</a>
          </div>

          <div className={`nav__menu ${showMenu ? "show" : ""}`} id="nav-menu">
            <ul className="nav__list">
              {
                menuList.map(list =>
                  <li className="nav__item"><a href={list.href} className={`nav__link ${menuActive === list.name && 'active'}`} onClick={() => navMenuHandle(list.name)}>{list.name}</a></li>
                )
              }
            </ul>
          </div>

          <div>
            <i className="bx bx-cart nav__cart"></i>
            <i className="bx bx-menu nav__toggle" id="nav-toggle" onClick={() => setShowMenu(!showMenu)}></i>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
