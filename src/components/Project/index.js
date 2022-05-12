import React from 'react'

const Project = ({project}) => {
    const {name, repo} = project
  return (
   
        <div class="project" key={name}>
           
                <h3>{name}</h3>
                <p>{repo}</p>
                
            
        </div>
    
  )
}

export default Project