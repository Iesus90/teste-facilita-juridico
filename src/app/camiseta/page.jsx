'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Details from '../components/Details/Details';
import shirts from '../data/shirts';

const DetailsPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const shirt = shirts.find(shirt => shirt.id === Number(id));

  return (
    <div className="max-w-md mx-auto my-2">
      <Details {...shirt}/>
    </div>
  );
};

export default DetailsPage;