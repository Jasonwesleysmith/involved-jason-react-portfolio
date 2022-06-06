import React from 'react'
import { VscGithub } from 'react-icons/vsc'
import styled from 'styled-components';

const Project = ({project}) => {
    const {name, repo, link, image } = project
  return (
        <ProjectStyled class="project" key={name}>
            <h3>{name}</h3>
            <img src={image}/>
            <div id="links">
              <a href={repo} target="_blank"><VscGithub size="2em" /></a>
              <a href={link} target="_blank">Deployed Application link</a>
            </div>
        </ProjectStyled>
    
  )
};

const ProjectStyled = styled.section`
  display:flex;
  flex-direction: column;
  margin: 10px;

  #links {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
  }
`;

export default Project