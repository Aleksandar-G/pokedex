import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const PokemonCard = (props) => {

    const [pokemonPic, setPokemonPic] = useState(null)

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/"+props.pokemon.name).then((res) => {
            setPokemonPic(res.data.sprites.front_default)
        })
    }, [])


    return (
        <>
        {pokemonPic &&     <Card sx={{ maxWidth: 200, minWidth:150 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={pokemonPic}
          alt={props.pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.pokemon.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>}
        </>
    )
}
