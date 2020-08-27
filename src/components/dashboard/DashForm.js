import React from 'react';

const DashForm = () => {
  return (
    <form className="search-form">
      <div className="form-group">
        <select name="category" value="0">
          <option value="0">All Kategorier</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Desserts">Desserts</option>
          <option value="Drinks">Drinks</option>
          <option value="Sides">Sides</option>
          <option value="Breads">Breads</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <input type="text" placeholder="Søk..." name="search" />
      <button className="search-btn" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

export default DashForm;
