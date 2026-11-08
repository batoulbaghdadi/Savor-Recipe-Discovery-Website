import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About';
import RecipeControl from './pages/RecipeControl'; 
import Login from './pages/Login';
import Signup from './pages/Signup';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import './App.css';


export const SharedBox = createContext();

function App() {
  useEffect(() => {
    document.title = "Savor";
  }, []);

  // favorites state
  const [favorites, setFavorites] = useState([]);

  // Add a recipe to favorites
  const handleAddFavorite = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

  return (
    <div className="App">
     
      <SharedBox.Provider value={handleAddFavorite}>
        <Router>
          <NavBar />

          <Routes>
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route
              path="/Favorites"
              element={<Favorites favorites={favorites} onAddFavorite={handleAddFavorite} />}
            />
            <Route path="/recipes" element={<RecipeControl />} />

            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </Router>
      </SharedBox.Provider>
    </div>
  );
}

export default App;
