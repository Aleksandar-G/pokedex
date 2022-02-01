import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/PokemonDetails.css";

export const PokemonDetails = (props) => {
  const params = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    axios({
      url: "https://pokeapi.co/api/v2/pokemon/" + params.pokemonName,
      method: "GET",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  let content;

  if (data == null) {
    content = <h3>Loading ...</h3>;
  } else {
    content = (
      <div className="pokemonDetailsContainer">
        <div className="pokemonDetailsPictureName">
          <h1>Pokemon name: {params.pokemonName}</h1>
          <img
            className="pokemonDetailsPicture"
            src={data.sprites.front_default}
          ></img>
        </div>
        <div className="pokemonStats">
          <div>
            <h2>Abilities</h2>
            <div className="pokemonAbilities">
              {data.abilities.map((x) => (
                <h3 className="">{x.ability.name}</h3>
              ))}
            </div>
          </div>
          <div>
            <h2>Types</h2>
            <div className="typeField">
              {data.types.map((x) => (
                <h3>{x.type.name}</h3>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>{content}</div>;
};
