import React, { useState } from 'react'
import Project from "../Project"

const Portfolio = () => {
  const projects = [
    {
      name: "Run Buddy",
      repo: "",
      link: "",
      image: ""
    },
    {
      name: "Super: songSearch",
      repo: "",
      link: "",
      image: ""
    },
    {
      name: "Super: songSearch",
      repo: "",
      link: "",
      image: ""
    },
    {
      name: "Super: songSearch",
      repo: "",
      link: "",
      image: ""
    },
    {
      name: "Super: songSearch",
      repo: "",
      link: "",
      image: ""
    },
    {
      name: "Super: songSearch",
      repo: "",
      link: "",
      image: ""
    }
  ]
  // const [projects] = useState([
  //   {
  //     name: "Run Buddy",
  //     repo: ""
  //   },
  //   {
  //     name: "Super: songSearch",
  //     repo: ""
  //   },
  //   {
  //     name: "Super: songSearch",
  //     repo: ""
  //   },
  //   {
  //     name: "Super: songSearch",
  //     repo: ""
  //   },
  //   {
  //     name: "Super: songSearch",
  //     repo: ""
  //   },
  //   {
  //     name: "Super: songSearch",
  //     repo: ""
  //   }
  // ])
  return (
    // <div>
      <>
        {projects.map((project,idx) => (
          <Project
          project = {project}
          key={"project" + idx}/>

        ))}
      </>
    // </div>
  )
}

export default Portfolio