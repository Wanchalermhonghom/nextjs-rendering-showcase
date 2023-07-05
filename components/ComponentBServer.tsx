import { fetchPokemons } from '@/services/fetchPokemon';

async function ComponentBServer() {
  const pokemons = await fetchPokemons();

  return (
    <div>
      <span>ComponentB</span>
      <p>{JSON.stringify(pokemons)}</p>
    </div>
  );
}

export default ComponentBServer;
