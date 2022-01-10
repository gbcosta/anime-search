import React, { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/home";
import AnimeList from "./pages/animeList";

import { useSelector, useDispatch } from "react-redux";
import { getAnimes } from "./store/animesSlice";

function App() {
  const animes = useSelector((state) => state.animes.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnimes("naruto", "anime", "1"));
  }, []);

  console.log(animes);
  return (
    <div className="App">
      <Home></Home>
      <AnimeList />
    </div>
  );
}

export default App;
