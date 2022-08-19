import Provider from "../provider/provider";
import Header from "../features/header/header";
import Pokemons from "../features/pokemons/pokemo";

export default function Homepage()
{
    return(
        <>
            <Provider>
                <Header />
                <Pokemons />
            </Provider>
        </>
    )
}