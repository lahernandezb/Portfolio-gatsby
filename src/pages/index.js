import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/intro';
import About from '../components/about';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main-content-wrapper">
      <Intro />
      <About />
    </div>
  </Layout>
);

export default IndexPage;
