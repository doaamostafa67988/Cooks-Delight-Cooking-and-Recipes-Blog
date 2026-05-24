import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RecipeDetails from './RecipeDetails';
import AboutUs from './AboutUs';
import CookingTips from './pages/CookingTips';
import RecipesPage from './pages/RecipesPage';
import NotFound from './pages/NotFound';

import Navbar from './features/recipes/components/Navbar';

function App() {
  return (
    <>
      <div className="nav-shell">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipe-details" element={<RecipeDetails />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/search" element={<RecipesPage />} />
        <Route path="/tips" element={<CookingTips />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
