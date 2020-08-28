import React, { useEffect, useContext, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import { getUserRecipes, getUserRecipesBySearch } from '../../data/recipes';
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

  const handleSearch = (e, search) => {
    e.preventDefault();
    // console.log(`Searching for ${searchText} in the category ${category}`);
    const searchRecipes = getUserRecipesBySearch('William', search);
    console.log(searchRecipes);
  };

  return (
    <div className="container dashboard">
      <h1 className="large text-primary">
        {user && `På ${user.name.split(' ').join()}'s kjøkken`}
      </h1>
      <DashboardActions />
      <div className="recipes-title my-1">
        <h2 className="text-primary">Mine Oppskrifter</h2>
        <DashForm handleSearch={handleSearch} />
      </div>
      <DashTable recipes={recipes} />
    </div>
  );
};

export default Dashboard;
