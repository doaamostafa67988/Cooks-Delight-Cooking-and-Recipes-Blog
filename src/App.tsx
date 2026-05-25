import { Routes, Route } from "react-router-dom";
import Navbar from "@/features/recipes/components/Navbar";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Login from "@/pages/Login";
import RecipeDetails from "@/pages/RecipeDetails";
import RecipesPage from "@/pages/RecipesPage";
import CookingTips from "@/pages/CookingTips";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <>
      <div className="nav-shell">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/search" element={<RecipesPage />} />
        <Route path="/tips" element={<CookingTips />} />
        <Route path="/recipe-details" element={<RecipeDetails />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
