import { useContext, useEffect } from "react";
import { ContextProvider } from "../../provider/provider";

export default function useFetchPokemons(url)
{
    const {state, dispatch} = useContext(ContextProvider);

    useEffect(() => {
        const fetchData = async() => {
            await fetch(url).then(res => (res.json())).then(output => {
                dispatch({type : 'doneFetching', payload : output})
            });
        }

        if(!state.isLoaded)  fetchData();
    }, [state.isLoaded]);

    return state.pokemons;
}