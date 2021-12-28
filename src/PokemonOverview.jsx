import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./styles/PokemonOverview.css"
import { PokemonCard } from './PokemonCard'
import { Pagination } from "@mui/material";

export const PokemonOverview = () => {

    const [currPage, setCurrPage] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
    const [paginationLimit, setPaginationLimit] = useState(100)
    const [pokemons, setPokemons] = useState(null)


    useEffect(() => {
        axios.get(currPage).then((res) => {
            console.log(currPage)
            setPaginationLimit(Math.ceil(res.data.count/10))
            setPokemons(res.data.results)
            console.log(paginationLimit)
        })
    },[currPage])

    const changePage = (e,v) => {
        setCurrPage(`https://pokeapi.co/api/v2/pokemon?offset=${20*v-20}&limit=20`)
    }

    return (
        <>
        <div className="pokemon-container ">{pokemons && pokemons.map(x => <PokemonCard key={x.name} pokemon={x} />)}
        </div>
        <Pagination className="d-flex justify-content-center" count={paginationLimit} color="primary" onChange={changePage}/>
        </>
    )
}
