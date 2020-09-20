import React from 'react';
import '../layout/Projects.css';
import netflix from '../layout/netflixclone.png';
const Projects = () => (
  <>
    <h2>Projetos</h2>
    <div className="anchor-cards">
      <h2>Netflix Clone</h2>
      <a target="_blanck" href="https://netflix-movieclone.web.app/">
        <img 
        className="project-images"
        src={netflix}
        alt="screen-netflixclone" />
      </a>
    </div>
  </>
);

export default Projects;