import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import { Container } from 'react-bootstrap';

const PokemonPage = ({ minId, maxId }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const randomIds = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * (maxId - minId + 1)) + minId
      );

      const requests = randomIds.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())
      );

      const results = await Promise.all(requests);
      const formattedResults = results.map((data) => ({
        numero: data.id,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        nombre: data.name,
        hp: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
      }));
      setPokemonList(formattedResults);
    };

    fetchPokemon();
  }, [minId, maxId]);

  return (
    <Container>
      <h2 className="text-center mb-4">Pokémon Aleatorios</h2>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.numero} pokemon={pokemon} />
        ))}
      </div>
    </Container>
  );
};

export default PokemonPage;
