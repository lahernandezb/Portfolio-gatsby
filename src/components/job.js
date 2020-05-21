import React from "react"

const Job = ({ name, position }) => {
  return (
    <div className="job">
      <h3 className="job__header">
        {position} <span className="job__company">@ {name}</span>
      </h3>
      <ul className="job__description">
        <li className="job__bullet">
          Communicate with a multi-disciplinary teams of developers, designers,
          and project managers on a daily basis
        </li>
      </ul>
    </div>
  )
}

export default Job
