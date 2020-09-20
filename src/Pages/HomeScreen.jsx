import React from 'react';
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import Contats from '../components/Contats';
import Projects from '../components/Projects';
import '../layout/HomeScreen.css';

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <div className="content">
        <Main />
        <Projects />
        <Contats />
      </div>
    </>
  )
}

export default HomeScreen;
