import React from 'react';
import './style.css';

const Input = ({ type, name, value, onChange, placeholder }) => {
  return (
    <input
      className="filtro-input"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;