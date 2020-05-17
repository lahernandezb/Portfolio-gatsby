import React from 'react';

const Intro = () => (
  <section className="intro">
    <p className="intro__greeting">
      Hi, I'm <span className="intro__name">Luis Hernandez</span>
    </p>
    <p className="intro__description">
      I'm a <span className="intro__title">full stack software developer </span>
      based in <span className="intro__location">Dayton, OH </span>
    </p>
    <button className="intro__cta">get in touch</button>
  </section>
);

export default Intro;
