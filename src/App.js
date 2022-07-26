import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";


function App() {
  return (
      <Router>
        <div>
        <Navbar/>
        </div>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/cocktail/:Id" element={<SingleCocktail/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/signup" element={<SignUp/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
