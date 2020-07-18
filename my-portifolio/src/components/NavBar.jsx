import React from 'react';
import { Link } from 'react-router-dom';
import '../layout/NavBar.css';

const NavBar = () => (
  <div  className="nav-bar">
    <h2>WILLIAM IGOR</h2>
    <ul className="ul-navbar" >
      <li>Sobre</li>
      <li>Home</li>
      <li>Contato</li>
      <li>Projetos</li>
    </ul>
  </div>
);

export default NavBar;
