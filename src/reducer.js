
export default function rootReducer(state, action)
{
    switch(action.type)
    {
        case 'loadPokemons':
            return {
                ...state,
                pokemons : action.payload,
            }
        default:
            return state;
    }
}