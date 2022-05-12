import React, { useState } from 'react'
import Project from "../Project"

const Portfolio = () => {
  const [projects] = useState([
    {
      name: "Run Buddy",
      repo: ""


    },
    {
      name: "Super: songSearch",
      repo: ""
    }
  ])
  return (
    <div>
      <div>
        {projects.map((project,idx) => (
          <Project
          project = {project}
          key={"project" + idx}/>

        ))}
      </div>

    </div>
  )
}

export default Portfolio