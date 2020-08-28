import React, { useState } from 'react';
import { categories } from '../../data/recipes';
import FormSelect from '../forms/FormSelect';

const DashForm = ({ handleSearch }) => {
  const [formData, setFormData] = useState({
    category: '',
    text: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { category, text } = formData;

  return (
    <form className="dash-form">
      <FormSelect
        name="category"
        value={category}
        firstOption="Alle Kategorier"
        options={categories}
        handleChange={handleChange}
      />
      <div className="form-group">
        <input
          type="text"
          placeholder="Søk..."
          name="text"
          value={text}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="search-btn"
          onClick={(e) => handleSearch(e, formData)}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
};

export default DashForm;
