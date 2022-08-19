
export default function rootReducer(state, action)
{
    switch(action.type)
    {
        case 'doneFetching':
            return {
                ...state,
                pokemons : action.payload,
                isLoaded : true,
            }
        default:
            return state;
    }
}