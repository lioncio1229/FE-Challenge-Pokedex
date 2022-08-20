import Header from "../features/header";
import { BasicInfo, Stat } from "../features/pokemon-info";
import { useParams } from "react-router-dom";
import { useFetchPokemonInfo } from "../features/pokemon-info";
import { capitalizeWord } from "../utils";

export default function PokemonPage() {
  const params = useParams();
  const pokemon = useFetchPokemonInfo(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon_name}/`
  );

  return (
    <>
      <Header />

      <div className="container m-3 mt-4">

        <div className="d-flex" style={{ height: "20rem" }}>
          <div className="bg-light" style={{ width: "300px", height: "300px" }}>
            {
              pokemon ? (
                <img
                  src={pokemon?.sprites.other.dream_world.front_default}
                  alt=""
                  className="p-2"
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <div
                  className="d-flex fs-5 align-items-center text-align-center justify-content-center"
                  style={{ width: "100%", height: "100%" }}
                >
                  Loading
                </div>
              )
            }
          </div>
          
          <div className="ms-5" style={{ width: "30rem" }}>
            <BasicInfo
              name={capitalizeWord(params.pokemon_name)}
              types={pokemon?.types}
              abilities={pokemon?.abilities}
            />
          </div>
        </div>

        <Stat stats={pokemon?.stats}/>

      </div>
    </>
  );
}
