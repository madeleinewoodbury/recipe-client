import React, { useEffect, useContext, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import { getUserRecipes } from '../../data/recipes';
import DashboardActions from './DashboardActions';
import DashForm from './DashForm';
import DashTable from './DashTable';
import './Dashboard.css';

const Dashboard = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = authContext;
  const [recipes] = useState(getUserRecipes('William'));

  useEffect(() => {
    if (!isAuthenticated) {
      props.history.push('/login');
    }
  }, [isAuthenticated, props.history]);
  return (
    <div className="container dashboard">
      <h1 className="large text-primary">
        {user && `På ${user.name.split(' ').join()}'s kjøkken`}
      </h1>
      <DashboardActions />
      <div className="recipes-title my-1">
        <h2 className="text-primary">Mine Oppskrifter</h2>
        <DashForm />
      </div>
      <DashTable recipes={recipes} />
    </div>
  );
};

export default Dashboard;
