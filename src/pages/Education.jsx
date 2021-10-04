/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Flip, Zoom } from 'react-reveal';

import Header from '../components/Header';

import '../styles/Education.css';

export default function Education() {
  return (
    <div>
      <Header />
      <Zoom>
        <h1 className="education-title">Faculdade e cursos</h1>
      </Zoom>
      <div className="course-container">
        <Flip left>
          <img className="course-logo" src="./logo-eel.png" alt="logo-eel" />
        </Flip>
        <Zoom>
          <div className="course-info">
            <div className="course-title">
              <div className="title-container">
                <h2>USP - Escola de Engenharia de Lorena</h2>
                <h3>Engenharia de Materiais</h3>
              </div>
              <p className="finished-in">Finalizado em 03/2020</p>
            </div>
            <div className="course-description">
              <p>Texto descrevendo o curso de engenharia de materiais</p>
            </div>
          </div>
        </Zoom>
      </div>
      <div className="course-container">
        <Flip left>
          <img className="course-logo" src="./logo-trybe.png" alt="logo-eel" />
        </Flip>
        <Zoom>
          <div className="course-info">
            <div className="course-title">
              <div className="title-container">
                <h2>Trybe</h2>
                <h3>Desenvolvimento web fullstack</h3>
              </div>
              <p className="finished-in">Previsão de conclusão 01/2022</p>
            </div>
            <div className="course-description">
              <p>Texto descrevendo o curso da trybe</p>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}
