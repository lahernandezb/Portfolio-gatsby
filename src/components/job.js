import React from "react"

const Job = ({ experience: { company, position, description } }) => {
  return (
    <div className="job">
      <h3 className="job__header">
        {position} <span className="job__company">@ {company}</span>
      </h3>
      <ul className="job__description">
        {description.map((item, i) => (
          <li key={i} className="job__bullet">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Job
