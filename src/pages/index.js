import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main-content-wrapper">
      <p className="greeting">
        Hello, I'm <span className="greeting__name">Luis Hernandez</span>
      </p>
      <p className="description">
        I'm a software developer based in Dayton, OH
      </p>
    </div>
  </Layout>
);

export default IndexPage;
