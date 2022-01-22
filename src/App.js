import React from "react";
import "./styles/App.css";
import { PokemonOverview } from "./PokemonOverview.jsx";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { PokemonDetails } from "./PokemonDetails";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PokemonOverview />} />

          <Route path="/pokemon" element={<PokemonDetails />}>
            <Route path=":pokemonName" element={<PokemonDetails />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};
