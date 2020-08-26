import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const { login, isAuthenticated, error, clearError } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/dashboard');
    }
    if (error !== null && error !== undefined) {
      const alertMsg = error;
      clearError();
      alert(alertMsg);
    }
  }, [isAuthenticated, props.history, error, clearError]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  const { email, password } = formData;

  return (
    <div className="container">
      <h1 className="large text-primary">Logg Inn</h1>
      <p className="lead">
        <i className="fas fa-user-circle text-primary"></i> Logg inn på ditt
        kjøkken
      </p>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Epost addresse"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Passord"
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
            minLength={6}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Logg Inn" />
      </form>
      <p className="my-1">
        Har du ikke opprettet ditt eget kjøkken enda?{' '}
        <Link to="/register">Registrer deg her</Link>
      </p>
    </div>
  );
};

export default Login;
