import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const PokemonCard = (props) => {
  const [pokemonPic, setPokemonPic] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_POKEMON_API + props.pokemon.name)
      .then((res) => {
        setPokemonPic(res.data.sprites.front_default);
      });
  }, []);

  return (
    <div className="m-3">
      {pokemonPic && (
        <Card
          onClick={() =>
            (window.location.href =
              "http://localhost:3000/pokemon/" + props.pokemon.name)
          }
          sx={{ maxWidth: 200, minWidth: 150 }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={pokemonPic}
              alt={props.pokemon.name}
              height="150"
              width="150"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.pokemon.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
};
