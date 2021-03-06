import React from "react"
import PropTypes from "prop-types"

const MenuList = ({ scrollTo }) => {
  return (
    <ul className="header__nav-list">
      <li className="header__menu-item">
        <button value="home" className="header__menu-link" onClick={scrollTo}>
          Home
        </button>
      </li>
      <li className="header__menu-item">
        <button className="header__menu-link" onClick={scrollTo} to="">
          Work
        </button>
      </li>
      <li className="header__menu-item">
        <button className="header__menu-link" onClick={scrollTo} to="">
          About
        </button>
      </li>
      <li className="header__menu-item">
        <button className="header__menu-link" onClick={scrollTo} to="">
          Experience
        </button>
      </li>
      <li className="header__menu-item">
        <button className="header__menu-link" onClick={scrollTo} to="">
          Contact
        </button>
      </li>
      <li hidden className="header__menu-item">
        <button className="header__menu-link" onClick={scrollTo} to="">
          Resume
        </button>
      </li>
    </ul>
  )
}

MenuList.propTypes = {
  toggleMenu: PropTypes.func,
}

MenuList.defaultProps = {
  ToggleMenu: ``,
}

export default MenuList
