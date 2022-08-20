import useFetchPokemons from "./useFetchPokemons";
import { capitalizeWord } from "../../utils";
import { Link, Outlet } from "react-router-dom";

export default function PokemonList() {
  const pokemons = useFetchPokemons("https://pokeapi.co/api/v2/pokemon/");

  if (!pokemons) return <div> Loading </div>;

  return (
    <div className="container">
      <div className="row gx-4">
        {pokemons.map((pokemon) => (
          <div key={pokemon.name} className="col gy-4 col-4">
            <div className="d-grid gap-2">
              <Link to={`/${pokemon.name}`} className="btn btn-light rounded-0 p-2">
                {capitalizeWord(pokemon.name)}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Outlet/>
    </div>
  );
}