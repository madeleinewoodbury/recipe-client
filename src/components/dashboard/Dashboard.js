import React, { useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const Dashboard = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = authContext;

  useEffect(() => {
    if (!isAuthenticated) {
      props.history.push('/login');
    }
  }, [isAuthenticated, props.history]);
  return (
    <div className="container">
      <h1>Welcome {user && user.name}</h1>
    </div>
  );
};

export default Dashboard;
