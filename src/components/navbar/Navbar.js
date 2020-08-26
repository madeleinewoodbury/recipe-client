import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout } = authContext;

  const authLinks = (
    <ul>
      <li>
        <Link to="/dashboard" title="Dashboard">
          <i className="fas fa-user"></i>{' '}
          <span className="hide-sm">Mitt kjøkken</span>
        </Link>
      </li>
      <li>
        <a onClick={(e) => logout()} href="#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-light">
      <h1>
        <Link to="/">
          <i className="fas fa-utensils"></i> Mise-en-Place
        </Link>
      </h1>
      {isAuthenticated ? authLinks : guestLinks}
    </nav>
  );
};

export default Navbar;
