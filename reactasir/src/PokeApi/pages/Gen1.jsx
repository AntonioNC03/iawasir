// src/pages/Gen1.js
import React from 'react';
import PokemonPage from './PokemonPage';

const Gen1 = () => {
  // IDs de la Gen1: 1 - 151
  return <PokemonPage minId={1} maxId={151} />;
};

export default Gen1;
