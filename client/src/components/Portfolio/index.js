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
      repo: "https://github.com/Jasonwesleysmith/super-song-search",
      link: " https://jasonwesleysmith.github.io/super-song-search/",
      image: "/images/Super-song-search.png"
    },
    {
      name: "It was the 90s",
      repo: "https://github.com/Jasonwesleysmith/it-was-the-90s",
      link: "https://itwasthe90s.herokuapp.com",
      image: "/images/It-was-the-90s.png"
    },
    {
      name: "Weather Now!",
      repo: "https://github.com/Jasonwesleysmith/weather-now",
      link: "https://jasonwesleysmith.github.io/weather-now/",
      image: "/images/WeatherNow.png"
    },
    {
      name: "Pizza Hunt",
      repo: "https://github.com/Jasonwesleysmith/pizza-hunt",
      link: "https://pizzahunt-project.herokuapp.com/",
      image: "/images/PizzaHunt.png"
    },
    {
      name: "Budget Tracker",
      repo: "https://github.com/Jasonwesleysmith/budget-tracker",
      link: "https://morning-dusk-36921.herokuapp.com/",
      image: "/images/budgettracker.png"
    },
    
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