import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Success');
  };

  const { name, email, password, password2 } = formData;

  return (
    <div className="container">
      <h1 className="large text-primary">Registrer Deg</h1>
      <p className="lead">
        <i className="fas fa-user-circle text-primary"></i> Skaff deg ditt eget
        kjøkken...
      </p>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Navn"
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
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
        <div className="form-group">
          <input
            type="password"
            placeholder="Gjenta passordet"
            name="password2"
            value={password2}
            onChange={(e) => handleChange(e)}
            minLength={6}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Logg Inn" />
      </form>
      <p className="my-1">
        Har du allerede et kjøkken? <Link to="/login">Logg inn her</Link>
      </p>
    </div>
  );
};

export default Register;
