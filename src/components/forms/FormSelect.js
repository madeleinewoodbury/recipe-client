import React from 'react';

const FormSelect = ({ name, value, firstOption, options, handleChange }) => {
  return (
    <div className="form-group">
      <select name={name} value={value} onChange={(e) => handleChange(e)}>
        <option value="0">{firstOption}</option>
        {options.map((item, idx) => (
          <option key={idx}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
