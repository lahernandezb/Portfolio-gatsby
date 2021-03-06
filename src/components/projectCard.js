import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Icon from "./iconImage"

const ProjectCard = ({ name, tools, description }) => {
  useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { extension: { eq: "png" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                src
                originalName
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="project-card">
      <a className="project-card__link" href="#">
        <h3 className="project-card__name">{name}</h3>
      </a>
      <p className="project-card__description">
        <strong>Description:</strong> {description}
      </p>
      <p className="project-card__tools">
        <strong>Tools:</strong> {tools.map(tool => ` ${tool} |`)}
      </p>
      <ul className="project-card__icon-list">
        {tools.map(tool => (
          <li className="project-card__icon">
            <Icon alt="tech-icon" filename={`${tool}.png`} />
          </li>
        ))}
      </ul>
    </div>
  )
}

ProjectCard.propTypes = {
  name: PropTypes.string,
  tools: PropTypes.array,
  description: PropTypes.string,
}

ProjectCard.defaultProps = {
  name: "",
  tools: [],
  description: "",
}

export default ProjectCard
