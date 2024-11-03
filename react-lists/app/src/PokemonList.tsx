interface Pokemon {
  number: string;
  name: string;
}

type Props = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Props) {
  return (
    <ol>
      {pokedex.map((p) => (
        <li key={p.number}>{p.name}</li>
      ))}
    </ol>
  );
}
