import React from "react";
import "./App.css";

import Home from "./pages/home";
import AnimeList from "./pages/animeList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/anime" element={<AnimeList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
