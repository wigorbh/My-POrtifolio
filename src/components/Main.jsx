import React from 'react';
import '../layout/Main.css';
import perfil from '../layout/william.jpg';

const Main = () => {
  return (
    <>
      <div className="main-content">
        <img
          className="image-home"
          src={perfil}
          alt="" />
      </div>
    </>
  );
}

export default Main;

