import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        postion: "absolute",
        top: "10rem",
        fontSize: "2rem",
        textAlign: "center",
      }}
      className="main-content-wrapper"
    >
      Site is temporarily down for maintenance thank you!
    </div>
  </Layout>
)

export default IndexPage
