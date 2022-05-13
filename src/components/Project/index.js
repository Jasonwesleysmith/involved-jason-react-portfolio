import React from 'react'
import { VscGithub } from 'react-icons/vsc'

const Project = ({project}) => {
    const {name, repo, link, image } = project
  return (
        <div class="project" key={name}>
            <h3>{name}</h3>
            <img src={image}/>
            <a href={repo} target="_blank"><VscGithub size="2em" /></a>
            <a href={link} target="_blank">Deployed Application</a>
        </div>
    
  )
}

export default Project