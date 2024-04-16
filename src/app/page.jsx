'use client';
import React, { useState } from 'react';
import Card from './components/Card/Card';
import Input from './components/Input/Input';
import Select from './components/Select/Select';
import shirts from './data/shirts.js';

const HomePage = () => {
  const [filters, setFilters] = useState({
    name: '',
    minPrice: '',
    maxPrice: '',
    size: '',
    color: '',
  });

  const [showFilters, setShowFilters] = useState(false);

  const toggleShowFilters = () => {
    setShowFilters(prevState => !prevState);
  };

  const filterShirts = () => {
    return shirts.filter(shirt => {
      const filterName = shirt.name.toLowerCase().includes(filters.name.toLowerCase());
      const filterPrice = (filters.minPrice === '' || shirt.price >= parseFloat(filters.minPrice)) &&
                               (filters.maxPrice === '' || shirt.price <= parseFloat(filters.maxPrice));
      const filterSize = filters.size === '' || shirt.sizes.includes(filters.size);
      const filterColor = filters.color === '' || shirt.colors.includes(filters.color);

      return filterName && filterPrice && filterSize && filterColor;
    });
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const cleanFilters = () => {
    setFilters({
      name: '',
      minPrice: '',
      maxPrice: '',
      size: '',
      color: '',
    });
  };

  return (
    <div className="page-conatiner">
      <button onClick={toggleShowFilters} className="show-filters-btn">
        {showFilters ? 'Esconder Filtros' : 'Exibir Filtros'}
      </button>
      {showFilters && (
        <div className="filter-container">
          <Input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            placeholder="Nome da camiseta"
          />
          <Input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleFilterChange}
            placeholder="Preço mínimo"
          />
          <Input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            placeholder="Preço máximo"
          />
          <Select
            name="size"
            value={filters.size}
            onChange={handleFilterChange}
            options={[
              { label: 'Selecione o tamanho', value: '' },
              { label: 'P', value: 'P' },
              { label: 'M', value: 'M' },
              { label: 'G', value: 'G' }
            ]}
          />
          <Select
            name="color"
            value={filters.color}
            onChange={handleFilterChange}
            options={[
              { label: 'Selecione a cor', value: '' },
              { label: 'Azul', value: 'blue' },
              { label: 'Vermelho', value: 'red' },
              { label: 'Verde', value: 'green' },
              { label: 'Laranja', value: 'orange' },
              { label: 'Marrom', value: 'brown' },
              { label: 'Cinza', value: 'gray' },
              { label: 'Rosa', value: 'pink' }
            ]}
          />
          <button onClick={cleanFilters} className="clean-filters">Limpar Filtros</button>
        </div>
      )}
      <div>
      {filterShirts().length === 0 ? (
          <p className="text-white text-lg font-semibold text-center">
            Nenhuma camiseta encontrada com os filtros selecionados.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {filterShirts().map((shirt) => (
              <Card key={shirt.id} shirt={shirt} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
