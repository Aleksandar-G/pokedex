import React from 'react'
import { useParams } from "react-router-dom";

export const PokemonDetails = () => {

    const params = useParams()
    return (
        <div>
            <h2>Pokemon name: {params.pokemonName}</h2>;
        </div>
    )
}
