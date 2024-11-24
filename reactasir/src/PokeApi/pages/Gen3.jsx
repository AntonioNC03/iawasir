// src/pages/Gen3.js
import React from 'react';
import PokemonPage from './PokemonPage';

const Gen3 = () => {
  // IDs de la Gen3: 252 - 386
  return <PokemonPage minId={252} maxId={386} />;
};

export default Gen3;
