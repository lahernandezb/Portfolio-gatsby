import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import Img from 'gatsby-image';
import MenuList from './menuList';
import logo from '../assets/images/luissymbolred.png';

const Header = ({ siteTitle }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    document.querySelector('.header__nav-list').classList.toggle('hidden');
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
      <div className="header__logo" aria-label="image">
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
      <nav className="header__nav">
        <button className="header__menu-button" onClick={toggleMenu}>
          Menu
        </button>
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
