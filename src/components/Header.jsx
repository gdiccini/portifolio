import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';

export default function Header() {
  return (
    <header>
      <nav className="navigation-bar">
        <Link to="/home">GD</Link>
        <ul className="links-list">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/educacao">Educação</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
