import React from "react"
import Job from "./job"

const Jobs = () => {
  const experience = [
    {
      company: "Sparkbox",
      position: "Full Stack Developer Apprentice",
      description: [
        "Communicate with a multi-disciplinary teams of developers, designers, and project managers on a daily basis",
        "Leverage TDD, OOP, and functional programming to write maintainble, performant, and modern code",
        "Architect and develope an internal financial analysis application.",
      ],
    },
    {
      company: "Covance Inc.",
      position: "Clinical Database Designer",
      description: [
        "Developed automation tool which reduced 4hr task to 30 miutes",
        "Collaborated with multiple business units to design database workflows according to client study requirements",
        "Delivered exceptional technical services to clients",
      ],
    },
  ]

  return (
    <section className="experience">
      <h2 className="experience__header">Where I've Worked</h2>
      <Job experience={experience[0]} />
      <Job experience={experience[1]} />
    </section>
  )
}

export default Jobs
