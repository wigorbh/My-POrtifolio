import React from 'react';
import '../layout/Contats.css';
import linkedin from '../layout/linkedin.png';
import github from '../layout/github.png';
import intagram from '../layout/instagram.png';

const Contats = () => {
  return (
    <div>
      <hr />
      <h2>Contatos</h2>
      <p>Me encontre nas mídias sociais</p>
      <div className="social-midias">
        <a href="https://www.linkedin.com/in/williamigor/">
          <img className="icon-img" src={linkedin} alt="icon-linkdein" /></a>
        <a href="https://github.com/wigorbh">
          <img className="icon-img" src={github} alt="icon-github" /></a>
        <a href="https://www.instagram.com/william.igor/">
          <img className="icon-img" src={intagram} alt="icon-intagram" /></a>
      </div>
    </div>
  )
};

export default Contats;
