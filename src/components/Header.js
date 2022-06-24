import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <nav>
          <ul className="navigation">
            <li className="logo-text">
              Bookstore CMS
            </li>
            <li>
              <Link to="/" className="nav-element">Books</Link>
            </li>
            <li>
              <Link to="/categories" className="nav-element">Categories</Link>
            </li>
          </ul>
        </nav>
        <div className="user-icon-container">
          <span className="material-symbols-rounded user-icon">
            person_filled
          </span>
        </div>
      </div>
    </header>
  );
}
