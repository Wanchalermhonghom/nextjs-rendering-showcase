'use client'

import { PokemonType, fetchPokemons } from '@/services/fetchPokemon';
import { useEffect, useState } from 'react';

function ComponentB() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState<PokemonType | undefined>(undefined);

  useEffect(() => {
    fetchPokemons().then((pokemons) => {
      setPokemons(pokemons);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div>loading...</div>;

  return <div>
    <span>ComponentB</span>
    <p>
    {JSON.stringify(pokemons)}
    </p>
    </div>;
}

export default ComponentB;
