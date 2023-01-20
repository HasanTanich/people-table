import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = ({onChangeTitle} : {onChangeTitle : (t: string) => void}) => {
  const activeClass = 'navbar__item navbar__item--active';
  const normalClass = 'navbar__item';
  
  return (
    <div className="header">
      <div 
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <NavLink
          to="/"
          className={ ({isActive}) => isActive ? activeClass : normalClass}
          onClick={()=>onChangeTitle('Home Page')}
        >
          Home
        </NavLink>
        <NavLink
          to="/people"
          className={ ({isActive}) => isActive ? activeClass : normalClass}
          onClick={()=>onChangeTitle('People Page')}
        >
          People
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
