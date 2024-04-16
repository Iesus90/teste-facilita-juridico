import React, { useState } from 'react';
import Image from 'next/image';
import colorsShirts from '../../data/colors';
import './style.css';

const Details = ({ image, name, price, sizes, colors }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="card">
      <Image src={`/images/${image}`} alt={name} width={300} height={300} className="h-auto mb-2 mx-auto" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p>Preço: R${price}</p>
      <div className="mb-4">
        <p>Tamanho:</p>
        <div className="flex">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeChange(size)}
              style={{ backgroundColor: '#dddd' }}
              className={`mr-2 px-3 py-1 rounded-md ${selectedSize === size ? 'border-2 border-black font-bold' : ''}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p>Cor:</p>
        <div className="flex">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              style={{ backgroundColor: colorsShirts[color] || '#dddd' }}
              className={`w-6 h-6 mr-2 rounded-full ${selectedColor === color ? 'border-2 border-black m-px' : ''}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;