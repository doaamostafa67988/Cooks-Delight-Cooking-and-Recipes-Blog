import { useEffect } from 'react';
import { useRecipeStore } from '../store/useRecipeStore';
import Footer from '../components/Footer';
import AboutPreview from '../features/recipes/components/AboutPreview';
import CategoryPalette from '../features/recipes/components/CategoryPalette';
import CTABanner from '../features/recipes/components/CTABanner';
import EmbarkJourney from '../features/recipes/components/EmbarkJourney';
import FeaturedRecipes from '../features/recipes/components/FeaturedRecipes';
import HeroSection from '../features/recipes/components/HeroSection';
import Navbar from '../features/recipes/components/Navbar';

const Home = () => {
  const { fetchRecipes } = useRecipeStore();

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <div className="site-shell">
      <Navbar />
      <HeroSection />
      <CategoryPalette />
      <FeaturedRecipes />
      <EmbarkJourney />
      <AboutPreview />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Home;
