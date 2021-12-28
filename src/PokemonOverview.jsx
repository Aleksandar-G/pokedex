import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { PokemonCard } from './PokemonCard'

export const PokemonOverview = () => {

    const [currPage, setCurrPage] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPage, setNextPage] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [pokemons, setPokemons] = useState(null)


    useEffect(() => {
        axios.get(currPage).then((res) => {
            console.log(res.data)
            setPokemons(res.data.results)
            setNextPage(res.data.next)
            setPrevPage(res.data.prev)
        })
    },[currPage])

    return (
        <>{pokemons && pokemons.map(x => <PokemonCard key={x.name} pokemon={x} />)}</>
    )
}
