import { useState } from 'react';
import { useRecipeStore } from '../../../store/useRecipeStore';
import RecipeCard from './RecipeCard';

const filters = [
  'ALL',
  'BREAKFAST',
  'LUNCH',
  'DINNER',
  'DESSERT',
  'SNACK',
  'SIDE DISH',
];

const EmbarkJourney = () => {
  const { recipes } = useRecipeStore();
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredRecipes =
    activeFilter === 'ALL'
      ? recipes
      : recipes.filter((recipe) =>
          recipe.mealType.some(
            (type) => type.toUpperCase() === activeFilter.toUpperCase()
          )
        );

  return (
    <section className="journey-section">
      <span className="section-pill">RECIPES</span>
      <h2>
        Embark on a <br /> Journey
      </h2>
      <p>
        With our diverse collection of recipes we have something to satisfy
        every palate.
      </p>

      <div className="filter-tabs">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={activeFilter === filter ? 'active' : ''}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="journey-grid">
        {filteredRecipes.slice(0, 6).map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default EmbarkJourney;
