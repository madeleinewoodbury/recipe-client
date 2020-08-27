import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className="my-1">
      <Link to="/" className="btn btn-light">
        <i className="fas fa-user-circle text-primary"></i> Rediger Profil
      </Link>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-plus text-primary"></i> Ny Oppskrift
      </Link>
    </div>
  );
};

export default DashboardActions;
