import React from 'react';

const FormInput = ({ type, label, placeholder, name, value, handleChange }) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      {type !== 'area' ? (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder && placeholder}
          onChange={(e) => handleChange(e)}
        />
      ) : (
        <textarea
          name={name}
          value={value}
          onChange={(e) => handleChange(e)}
        ></textarea>
      )}
    </div>
  );
};

export default FormInput;
