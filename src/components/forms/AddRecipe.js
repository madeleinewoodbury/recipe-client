import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { countries } from '../../data/countries';
import { categories } from '../../data/recipes';
import FormSelect from './FormSelect';
import FormInput from './FormInput';
import AddIngredient from './AddIngredient';
import './Forms.css';

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    name: '',
    servings: '',
    category: '',
    country: '',
    ingredients: [],
    instructions: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAddIngredient = (ingredient) => {
    const ingredientsArr = formData.ingredients;
    ingredientsArr.push(ingredient);
    setFormData({ ...formData, ingredients: ingredientsArr });
  };

  const removeIngredient = (ingredient) => {
    setFormData({
      ...formData,
      ingredients: formData.ingredients.filter(
        (item) => item.ingredient !== ingredient.ingredient
      ),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const {
    category,
    name,
    servings,
    country,
    ingredients,
    instructions,
  } = formData;

  return (
    <div className="container">
      <h1 className="large text-primary">Ny Oppskrift</h1>
      <form className="form">
        <div className="form-flex">
          <FormInput
            type="text"
            label="Navn på oppskrift"
            name="name"
            value={name}
            handleChange={handleChange}
          />
          <FormInput
            type="text"
            label="Antall Porsjoner"
            name="servings"
            value={servings}
            handleChange={handleChange}
          />
        </div>
        <div className="form-flex">
          <FormSelect
            name="category"
            value={category}
            firstOption="Velg en kategori"
            handleChange={handleChange}
            options={categories}
          />
          <FormSelect
            name="country"
            value={country}
            firstOption="Velg nasjonalitet"
            handleChange={handleChange}
            options={countries}
          />
        </div>
        <AddIngredient
          handleAddIngredient={handleAddIngredient}
          ingredients={ingredients}
          removeIngredient={removeIngredient}
        />
        <FormInput
          type="area"
          label="Instruksjoner"
          name="instructions"
          value={instructions}
          handleChange={handleChange}
        />
        <button
          onClick={(e) => handleSubmit(e)}
          className="btn btn-primary my-1"
        >
          Legg til
        </button>
        <Link className="btn btn-light my-1" to="/dashboard">
          Gå tilbake
        </Link>
      </form>
    </div>
  );
};

export default AddRecipe;
