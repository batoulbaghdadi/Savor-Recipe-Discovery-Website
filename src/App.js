
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About';
import RecipeControl from './pages/RecipeControl';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RecipeDisplay from './pages/RecipeDisplay';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import SharedBoxProvider from "./Context/SharedBox";

import './App.css';

function App() {

  useEffect(() => {
    document.title = "Savor";
  }, []);

  return (
    <SharedBoxProvider>
      <div className="App">

        <Router>
          <NavBar />

          <Routes>
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/Favorites" element={<Favorites />} />

            <Route path="/RecipeDisplay" element={<RecipeDisplay />} />

            <Route path="/recipes" element={<RecipeControl />} />

            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </Router>

      </div>
    </SharedBoxProvider>
  );
}

export default App;
