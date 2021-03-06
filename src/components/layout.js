/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../assets/styles/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="main-content-wrapper">{children}</main>
      <footer className="footer">
        <p className="footer__thank-you">Thanks for visiting!</p>
        <p className="footer__year">© {new Date().getFullYear()},</p>
        <p className="footer__design-credit">
          Designed by{" "}
          <a className="footer__credit" href="https://www.behance.net/alanaee">
            Alyssa Schenkel
          </a>
          {` `}
        </p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
