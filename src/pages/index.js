import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Intro from "../components/intro"
import About from "../components/about"
import ProjectsContainer from "../components/projects-container"
import Jobs from "../components/jobs"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <ProjectsContainer />
    <About />
    <Jobs />
    <Contact />
  </Layout>
)

export default IndexPage
