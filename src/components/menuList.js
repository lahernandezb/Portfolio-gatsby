import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const MenuList = ({ toggleMenu }) => {
  return (
    <ul className="header__nav-list">
      <li className="header__menu-item">
        <Link className="header__menu-link" onClick={toggleMenu} to="">
          Home
        </Link>
      </li>
      <li className="header__menu-item">
        <Link className="header__menu-link" onClick={toggleMenu} to="">
          Work
        </Link>
      </li>
      <li className="header__menu-item">
        <Link className="header__menu-link" onClick={toggleMenu} to="">
          About
        </Link>
      </li>
      <li className="header__menu-item">
        <Link className="header__menu-link" onClick={toggleMenu} to="">
          Contact
        </Link>
      </li>
      <li className="header__menu-item">
        <Link className="header__menu-link" onClick={toggleMenu} to="">
          Resume
        </Link>
      </li>
    </ul>
  );
};

MenuList.propTypes = {
  toggleMenu: PropTypes.func,
};

MenuList.defaultProps = {
  ToggleMenu: ``,
};

export default MenuList;
