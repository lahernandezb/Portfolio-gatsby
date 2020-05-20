import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import MenuList from "./menuList"

const Header = ({ siteTitle }) => {
  const toggleMenu = () => {
    const menu = document.querySelector(".header__nav")

    const isExpanded = menu.getAttribute("aria-expanded") === "true"
    menu.setAttribute("aria-expanded", !isExpanded)
  }

  const scrollTo = e => {
    toggleMenu()

    const target = e.target.textContent.toLowerCase()

    console.log(target)
    const el = document.querySelector(`.${target}`)

    el.scrollIntoView({ behavior: "smooth" })
  }

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
