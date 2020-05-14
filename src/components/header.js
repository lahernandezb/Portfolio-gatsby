import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import Img from 'gatsby-image';
import MenuList from './menuList';
import logo from '../assets/images/luissymbolred.png';

const Header = ({ siteTitle }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    const menu = document.querySelector('.header__nav');

    const isExpanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', !isExpanded);
  };

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "luissymbolred.png" }) {
        childImageSharp {
          fluid(maxWidth: 32) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <header className="header">
      <h1 className="header__title">{siteTitle}</h1>
      <div className="header__logo" aria-hidden="true">
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
      <button
        className="header__menu-button"
        onClick={toggleMenu}
        aria-haspopup="true"
      >
        Menu
      </button>
      <nav className="header__nav" aria-expanded="false">
        <MenuList />
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
