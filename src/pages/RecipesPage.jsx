import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RecipeCard from '../features/recipes/components/RecipeCard';
import CTABanner from '../features/recipes/components/CTABanner';
import Footer from '../components/Footer';
import { useRecipeStore } from '../store/useRecipeStore';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const RecipesPage = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const searchTerm = query.get('search') || '';
  const [input, setInput] = useState(searchTerm);
  const { recipes } = useRecipeStore();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { setInput(searchTerm); }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = input.trim();
    navigate(q ? `/search?search=${encodeURIComponent(q)}` : '/search');
  };

  useEffect(() => {
    if (!searchTerm) {
      setResults(recipes);
      return;
    }
    setLoading(true);
    fetch(`https://dummyjson.com/recipes/search?q=${encodeURIComponent(searchTerm)}`)
      .then(r => r.json())
      .then(data => {
        if (data.recipes && data.recipes.length > 0) {
          setResults(data.recipes);
        } else {
          const local = recipes.filter(r =>
            r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (r.tags && r.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())))
          );
          setResults(local);
        }
        setLoading(false);
      })
      .catch(() => {
        const local = recipes.filter(r =>
          r.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(local);
        setLoading(false);
      });
  }, [searchTerm, recipes]);

  return (
    <div className="site-shell">
      <div className="recipes-page">
        <div className="recipes-page-header">
          {searchTerm ? (
            <>
              <h1>
                Displaying Results For: <span className="search-highlight">{searchTerm.toUpperCase()}</span>
              </h1>
              <p className="recipes-count">
                {loading ? 'Searching...' : `${results.length} recipe${results.length !== 1 ? 's' : ''} found`}
              </p>
            </>
          ) : (
            <>
              <h1>Find Your Next Favorite Dish</h1>
              <p className="recipes-count">{results.length} recipes available</p>
            </>
          )}
          <form className="search-page-form" onSubmit={handleSearch}>
            <input
              type="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search recipes, ingredients, or flavors"
              aria-label="Search recipes"
            />
            <button type="submit" className="button button-primary">Search</button>
          </form>
        </div>

        {loading ? (
          <div className="recipes-loading">Searching for recipes...</div>
        ) : results.length === 0 ? (
          <div className="recipes-empty">
            <p>No recipes found for "<strong>{searchTerm}</strong>".</p>
            <p>Try a different search term.</p>
          </div>
        ) : (
          <div className="recipes-grid">
            {results.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default RecipesPage;
