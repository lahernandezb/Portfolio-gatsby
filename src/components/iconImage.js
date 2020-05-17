import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Icon = props => (
  <StaticQuery
    query={graphql`
      query {
        icons: allFile(filter: { relativeDirectory: { eq: "icons" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.icons.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      return !image ? null : (
        <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />
      );
    }}
  />
);

export default Icon;
