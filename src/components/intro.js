import React from "react"

const Intro = () => (
  <section className="home">
    <p className="home__greeting">
      Hi, I'm <span className="home__name">Luis Hernandez</span>
    </p>
    <p className="home__description">
      I'm a <span className="home__title">full stack software developer </span>
      based in <span className="home__location">Dayton, OH </span>
    </p>
    <button onClick={console.log("contact")} className="home__cta">
      get in touch
    </button>
  </section>
)

export default Intro
