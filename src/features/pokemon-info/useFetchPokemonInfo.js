import { useState, useEffect } from "react";

export default function useFetchPokemonInfo(url)
{
    const [info, setInfo] = useState(null);
    
    useEffect(() => {        
        const fetchInfo = async () => {
            await fetch(url).then(res => res.json()).then(result => {
                setInfo(result);
            });
        }
        if(url) fetchInfo();
    }, [url]);

    return info;
}