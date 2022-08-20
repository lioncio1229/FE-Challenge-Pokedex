import { useContext, useEffect } from "react";
import { ContextProvider } from "../../provider/provider";

export default function useFetchPokemons(url)
{
    const {state, dispatch} = useContext(ContextProvider);

    useEffect(() => {
        const fetchData = async() => {
            await fetch(url).then(res => (res.json())).then(obj => {
                dispatch({type : 'loadPokemons', payload : obj.results})
            });
        }

        if(!state.pokemons)  fetchData();
    }, [url]);

    return state.pokemons;
}