import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Perfil from './resources/Perfil.jpg';

function About() {
  return (
    <div class="about">
        <div class="izq">
             
        </div>
        <div class="der">
            <img class="perfil rounded-circle" src={Perfil} />
        </div>
    </div>
  );
}

export default About;