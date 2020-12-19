import React, { useEffect, useContext, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import {
  getUserRecipes,
  getUserRecipesBySearch,
  getAllRecipes,
  recipesPerPage,
} from '../../data/recipes';
import DashboardActions from './DashboardActions';
import DashForm from './DashForm';
import DashTable from './DashTable';
import Pagination from './Pagination';
import './Dashboard.css';

const Dashboard = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = authContext;
  // const [recipes] = useState(getUserRecipes('William'));
  const [recipes, setRecipes] = useState(getAllRecipes());
  const [currentPage, setCurrentPage] = useState(1);

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
    setRecipes(searchRecipes);
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      <DashTable recipes={recipes} recipesPerPage={recipesPerPage} />
      <Pagination
        numItems={recipes.length}
        itemsPerPage={recipesPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default Dashboard;
