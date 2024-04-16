import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './style.css';

const Card = ({ shirt }) => {
  const { id, image, name, price, sizes, colors } = shirt;

  return (
      <Link 
        href={{
          pathname: '/camiseta',
          query: { 
            id: id
          },
        }}>
        <div className="card">
          <Image 
            src={`/images/${image}`} 
            alt={name} 
            width={300} 
            height={300}
            className="w-full h-auto mb-2 hover:-translate-y-5 hover:rotate-12 hover:scale-110 hover:duration-200"
          />
          <h2 className="text-lg font-semibold">{name}</h2>
          <p>Preço: R${price.toFixed(2)}</p>
          <div class="flex">
            {sizes.map((size, index) => (
              <div
                key={index}
                style={{ backgroundColor: '#dddd' }}
                className="mr-2 px-3 py-1 border border-gray-300 rounded-md"
              >
                {size}
              </div>
            ))}
          </div>
        </div>
      </Link>
  );
};

export default Card;