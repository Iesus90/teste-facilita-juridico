import React from 'react';
import './style.css';

const Select = ({ name, value, onChange, options }) => {
  return (
    <select className="filtro-select" name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;