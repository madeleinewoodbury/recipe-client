import React from 'react';

const FormInput = ({ type, label, name, value, handleChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {type !== 'area' ? (
        <input
          type={type}
          name={name}
          value={value}
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
