import useFetchPokemons from "./useFetchPokemons";
import { capitalizeWord } from "../../utils";

export default function Pokemons() {
    
  const pokemons = useFetchPokemons("https://pokeapi.co/api/v2/pokemon/");

  if (!pokemons) return <div> Loading </div>;

  return (
    <div className="container">
      <div className="row gx-4">
        {pokemons.results.map((pokemon) => (
          <div key={pokemon.name} className="col gy-4 col-4">
            <div className="d-grid gap-2">
              <button className="btn btn-light rounded-0" type="button">
                {capitalizeWord(pokemon.name)}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
