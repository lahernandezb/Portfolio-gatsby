import React, { createContext } from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Intro from "../components/intro"
import About from "../components/about"
import ProjectsContainer from "../components/projects-container"
import Jobs from "../components/jobs"
import Contact from "../components/contact"

export const NavApi = createContext({})

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

const api = { toggleMenu, scrollTo }

const IndexPage = () => (
  <NavApi.Provider value={api}>
    <Layout>
      <SEO title="Home" />
      <Intro />
      <ProjectsContainer />
      <About />
      <Jobs />
      <Contact />
    </Layout>
  </NavApi.Provider>
)

export default IndexPage
