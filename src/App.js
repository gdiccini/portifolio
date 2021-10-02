import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={ Home } />
          <Route path="/educacao" component={ Education } />
          <Route path="/projetos" component={ Projects } />
          <Route path="/contato" component={ Contact } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
