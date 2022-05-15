import React, { useState } from 'react'
import Project from "../Project"

const Portfolio = () => {
  const projects = [
    {
      name: "Run Buddy",
      repo: "https://github.com/Jasonwesleysmith/Run-buddy",
      link: "https://jasonwesleysmith.github.io/Run-buddy/",
      image: "/images/Run-Buddy-Cover.png"
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
  return (
      <section id="my-work">
        <h2>My work</h2>
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </section>
  )
}

export default Portfolio