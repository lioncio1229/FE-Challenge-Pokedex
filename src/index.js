import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Provider from "./provider";
import Homepage from "./routes/homepage";
import PokemonPage from "./routes/pokemonPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/:pokemon_name" element={<PokemonPage/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);