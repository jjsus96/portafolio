import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Perfil from './resources/Perfil.jpg';

function About() {
  return (
    <div className="about">
        <div className="cent">
        <img className="perfil rounded-circle" src={Perfil} />
             <h1 className="nombre">&lt; Jesús Sayago &gt;</h1>
             <h3 className="titulo">Desarrollador Web Full Stack</h3>
        </div>
    </div>
  );
}

export default About;