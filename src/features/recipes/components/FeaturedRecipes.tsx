// @ts-nocheck
import { useState } from 'react';
import { useRecipeStore } from '../../../store/useRecipeStore';
import RecipeCard from './RecipeCard';

const FeaturedRecipes = () => {
  const { featuredRecipes } = useRecipeStore();
  const [activeIndex, setActiveIndex] = useState(0);

  if (featuredRecipes.length === 0) {
    return null;
  }

  const visibleRecipes = Array.from(
    { length: Math.min(2, featuredRecipes.length) },
    (_, index) => {
      const recipeIndex = (activeIndex + index) % featuredRecipes.length;
      return featuredRecipes[recipeIndex];
    }
  );

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      (currentIndex - 2 + featuredRecipes.length) % featuredRecipes.length
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 2) % featuredRecipes.length);
  };

  return (
    <section className="featured-section">
      <div className="featured-header">
        <h2>Featured Recipes</h2>
        <div className="featured-controls">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous recipe"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 6-6 6 6 6" />
            </svg>
          </button>
          <button type="button" onClick={showNext} aria-label="Next recipe">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="featured-grid">
        {visibleRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedRecipes;
