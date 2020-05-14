import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const MenuList = () => {
  const menu = useRef();
  // move menu state from header and add here. Use toggle to remove/add class for animation.
  return (
    <ul className="header__nav-list" ref={menu}>
      <li className="header__menu-item" aria-hidden="true">
        <Link className="header__menu-link" to="">
          Home
        </Link>
      </li>
      <li className="header__menu-item" aria-hidden="true">
        <Link className="header__menu-link" to="">
          Work
        </Link>
      </li>
      <li className="header__menu-item" aria-hidden="true">
        <Link className="header__menu-link" to="">
          About
        </Link>
      </li>
      <li className="header__menu-item" aria-hidden="true">
        <Link className="header__menu-link" to="">
          Contact
        </Link>
      </li>
      <li className="header__menu-item" aria-hidden="true">
        <Link className="header__menu-link" to="">
          Resume
        </Link>
      </li>
    </ul>
  );
};

export default MenuList;
