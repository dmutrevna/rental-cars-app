import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import css from './Navigation.module.css';

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className={css.navContainer}>
        <li className={location.pathname === '/' ? css.active : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/catalog' ? css.active : ''}>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li className={location.pathname === '/favorites' ? css.active : ''}>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
