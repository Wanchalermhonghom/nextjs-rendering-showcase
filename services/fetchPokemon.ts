export async function fetchPokemons() {
  const pokemonArray = [
    { name: 'Pikachu', type: 'Electric' },
    { name: 'Charizard', type: 'Fire/Flying' },
    { name: 'Bulbasaur', type: 'Grass/Poison' },
    { name: 'Squirtle', type: 'Water' },
    { name: 'Jigglypuff', type: 'Normal/Fairy' },
  ];

  return new Promise<typeof pokemonArray>((resolve) => {
    setTimeout(() => {
      resolve(pokemonArray);
    }, 2000);
  });
}

export type PokemonType = Awaited<ReturnType<typeof fetchPokemons>>;
