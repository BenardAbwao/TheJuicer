import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";


function App() {
  return (
      <Router>
        <div>
        <Navbar/>
        </div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/cocktail/:Id" element={<SingleCocktail/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
  );
}

export default App;
