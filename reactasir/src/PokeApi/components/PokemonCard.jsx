import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card">
      <img src={pokemon.img} alt={pokemon.nombre} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{`#${pokemon.numero} - ${pokemon.nombre.toUpperCase()}`}</h5>
        <p className="card-text">
          <strong>HP:</strong> {pokemon.hp} <br />
          <strong>Ataque:</strong> {pokemon.ataque} <br />
          <strong>Defensa:</strong> {pokemon.defensa}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
