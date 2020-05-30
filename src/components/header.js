import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"

import Img from "gatsby-image"
import MenuList from "./menuList"
import { NavApi } from "../pages/index"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 32) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { toggleMenu, scrollTo } = useContext(NavApi)
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
        <MenuList scrollTo={scrollTo} />
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
