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
            </div>
            <div className="course-description">
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

            </div>
            <div className="course-description">

            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}
