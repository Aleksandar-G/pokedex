import React, {useEffect,useState} from 'react'
import axios from 'axios'
import "./cardCss.css"
export const Card = (props) => {

    const [pokemonPic, setPokemonPic] = useState(null)

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/"+props.pokemon.name).then((res) => {
            setPokemonPic(res.data.sprites.front_default)
        })
    }, [])


    return (
        <>
        {pokemonPic && <div>
            {props.pokemon.name}
            <img src={pokemonPic} alt="tesd"/>
        </div>}
        </>
    )
}
