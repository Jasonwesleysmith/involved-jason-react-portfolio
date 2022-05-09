import React from 'react'

const Project = ({link, project, img, alt}) => {
  return (
    <article>
        <a class="article" href={link}>
            <h3>{project}</h3>
            <img src={img} alt={alt} />
        </a>
    </article>
  )
}

export default Project