import React from "react"

const About = () => (
  <section className="about">
    <h2 className="about__header">About Me</h2>
    <p className="about__intro">
      I'm a software developer who enjoys all areas of the stack. I build and
      sometimes rescue applications. I found my passion for progamming while I
      was working in the pharmaceutical industry. There I took it upon myself to
      automate a labor-intensive process with Visual Basic for Applications and
      I was hooked. I'm constantly pursuing the challenge and excitement that
      come along with tackling new ideas and ways of thinking.
    </p>
    <p className="about__qualifications">
      Fueled by boundless enthusiam and curiosity I am an individual who is
      easily inspired. I'm a fast learner, able to pick up new skills and
      balance multiple projects with relative ease. I strive to create software
      that is maintainable, efficient, and accessbile.
    </p>
    <h3 className="about__skills">Skills</h3>
    <ul className="about__skills-list">
      <li className="about__skills-item">JavaScript</li>
      <li className="about__skills-item">Node.js</li>
      <li className="about__skills-item">Python</li>
      <li className="about__skills-item">
        Testing: Jest, Mocha, Sinon, Stryker
      </li>
      <li className="about__skills-item">React</li>
      <li className="about__skills-item">Vue</li>
      <li className="about__skills-item">HTML</li>
      <li className="about__skills-item">(S) CSS</li>
      <li className="about__skills-item">SQL and NoSQL datbases</li>
    </ul>
  </section>
)

export default About
