import React, { useState, Fragment } from 'react';
import FormInput from './FormInput';

const AddIngredient = ({
  handleAddIngredient,
  ingredients,
  removeIngredient,
}) => {
  const [formData, setFormData] = useState({
    measurement: '',
    ingredient: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleClick = (item) => {
    removeIngredient(item);
    setFormData({ measurement: item.measurement, ingredient: item.ingredient });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddIngredient(formData);
    setFormData({ measurement: '', ingredient: '' });
  };

  const { measurement, ingredient } = formData;

  return (
    <Fragment>
      <div className="form-ingredients">
        <div className="form">
          <div className="form-flex">
            <FormInput
              type="text"
              label="Målenhet"
              name="measurement"
              value={measurement}
              handleChange={handleChange}
            />
            <FormInput
              type="text"
              label="Ingrediens"
              name="ingredient"
              value={ingredient}
              handleChange={handleChange}
            />
            <div className="btn-container">
              <button className="btn" onClick={(e) => handleSubmit(e)}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ingredients-list">
        {ingredients.length > 0 ? (
          ingredients.map((item, idx) => (
            <span
              onClick={(e) => handleClick(item)}
              className="ingredient-btn"
              key={idx}
            >
              <span className="ingredient">
                {item.measurement} {item.ingredient}
              </span>
              <i className="fas fa-pen"></i>
            </span>
          ))
        ) : (
          <span>Legg til ingredienser</span>
        )}
      </div>
    </Fragment>
  );
};

export default AddIngredient;
