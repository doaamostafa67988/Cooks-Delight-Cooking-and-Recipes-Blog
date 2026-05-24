import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CTABanner from '../features/recipes/components/CTABanner';
import Footer from '../components/Footer';
import { masteringBasics, tipsAndTricks, nourishingPalate } from '../data/cookingTips';

const KnifeIcon = () => (
  <svg viewBox="0 0 64 64" width="44" height="44" fill="none" stroke="#2b2b29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 44 L46 6 c4 0 10 4 10 10 L20 52 Z" />
    <path d="M16 52 l-6 6" />
  </svg>
);

const UtensilsIcon = () => (
  <svg viewBox="0 0 64 64" width="44" height="44" fill="none" stroke="#2b2b29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 v22 a6 6 0 0 1-12 0 V6" />
    <path d="M14 28 V58" />
    <path d="M44 6 c-6 0-10 6-10 14 s4 12 10 12 V58" />
  </svg>
);

const ScaleIcon = () => (
  <svg viewBox="0 0 64 64" width="44" height="44" fill="none" stroke="#2b2b29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="22" width="48" height="34" rx="4" />
    <path d="M24 22 v-6 a8 8 0 0 1 16 0 v6" />
    <circle cx="32" cy="38" r="9" />
    <path d="M32 32 v6 l4 2" />
  </svg>
);

const QuickTips = [
  { Icon: KnifeIcon, label: 'Quality Tools', desc: 'Invest in high-quality knives, cutting boards, and cookware.' },
  { Icon: UtensilsIcon, label: 'Essential Utensils', desc: 'Have a variety of utensils, including spatulas, tongs, and ladles.' },
  { Icon: ScaleIcon, label: 'Measuring Accuracy', desc: 'Use measuring cups and spoons for precise ingredient quantities.' },
];

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 6-6 6 6 6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 6 6 6-6 6" />
  </svg>
);

const CookingTips = () => {
  const [newestRecipes, setNewestRecipes] = useState([]);
  const [recipeSlide, setRecipeSlide] = useState(0);
  const [nourishSlide, setNourishSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/recipes?limit=6&sortBy=id&order=desc')
      .then(r => r.json())
      .then(data => setNewestRecipes(data.recipes || []))
      .catch(() => {});
  }, []);

  const visibleRecipes = newestRecipes.slice(recipeSlide, recipeSlide + 3);
  const visibleNourish = nourishingPalate.slice(nourishSlide, nourishSlide + 3);

  return (
    <div className="site-shell">
      <div className="tips-intro">
        <div className="tips-intro-top">
          <h1>Our Essential<br />Cooking Tips</h1>
          <p>
            Welcome to Cooks Delight's treasure trove of cooking wisdom! Whether you're a
            seasoned chef or just starting your culinary journey, our cooking tips are designed
            to elevate your skills, enhance your kitchen experience, and bring joy to your
            cooking adventures.
          </p>
        </div>
        <div className="tips-quick-panel">
          {QuickTips.map(({ Icon, label, desc }) => (
            <div key={label} className="tips-quick-item">
              <span className="tips-quick-icon"><Icon /></span>
              <div className="tips-quick-text">
                <span className="tips-quick-label">{label}</span>
                <span className="tips-quick-desc">{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="tips-section">
        <div className="tips-section-header">
          <h2>Newest Recipes</h2>
          <div className="featured-controls">
            <button
              onClick={() => setRecipeSlide(Math.max(0, recipeSlide - 3))}
              disabled={recipeSlide === 0}
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => setRecipeSlide(Math.min(newestRecipes.length - 3, recipeSlide + 3))}
              disabled={recipeSlide + 3 >= newestRecipes.length}
              aria-label="Next"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="tips-recipe-grid">
          {newestRecipes.length === 0
            ? [1, 2, 3].map(i => <div key={i} className="tips-recipe-skeleton" />)
            : visibleRecipes.map(recipe => (
              <div
                key={recipe.id}
                className="tips-recipe-card"
                onClick={() => { navigate(`/recipe/${recipe.id}`); window.scrollTo({ top: 0 }); }}
              >
                <div className="tips-recipe-img">
                  <img src={recipe.image} alt={recipe.name} loading="lazy" />
                </div>
                <div className="tips-recipe-body">
                  <h3>{recipe.name}</h3>
                  <div className="recipe-meta">
                    <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} MIN</span>
                    <i></i>
                    <span>{recipe.difficulty}</span>
                    <i></i>
                    <span>{recipe.servings} SERVES</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <section className="tips-section">
        <div className="tips-section-header">
          <h2>Mastering the Basics</h2>
        </div>
        <div className="tips-basics-grid">
          {masteringBasics.map(tip => (
            <article key={tip.id} className="tips-basic-card">
              <div className="tips-basic-img">
                <img src={tip.image} alt={tip.title} loading="lazy" />
                <span className="tips-basic-tag">{tip.tag}</span>
              </div>
              <div className="tips-basic-body">
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
                <button className="button button-outline" style={{ fontSize: '11px', minHeight: '36px', padding: '0 20px' }}>
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tips-section tips-nourish-section">
        <div className="tips-section-header">
          <h2>Nourishing Every Palate</h2>
          <div className="featured-controls">
            <button
              onClick={() => setNourishSlide(Math.max(0, nourishSlide - 1))}
              disabled={nourishSlide === 0}
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => setNourishSlide(Math.min(nourishingPalate.length - 3, nourishSlide + 1))}
              disabled={nourishSlide + 3 >= nourishingPalate.length}
              aria-label="Next"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="tips-nourish-grid">
          {visibleNourish.map(item => (
            <div key={item.id} className="tips-nourish-card">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="tips-nourish-overlay" style={{ background: `linear-gradient(to top, ${item.color}ee 0%, ${item.color}88 40%, transparent 70%)` }}>
                <div className="tips-nourish-bottom">
                  <span className="tips-nourish-title">{item.title}</span>
                  <p className="tips-nourish-desc">{item.description}</p>
                  <div className="tips-nourish-meta">
                    <span>15 MIN • 01 JUN 23</span>
                    <button className="tips-nourish-btn">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tips-section">
        <div className="tips-section-header">
          <h2>Tips &amp; Tricks</h2>
        </div>
        <div className="tips-tricks-grid">
          {tipsAndTricks.map(tip => (
            <article key={tip.id} className="tips-trick-card">
              <div className="tips-trick-img">
                <img src={tip.image} alt={tip.title} loading="lazy" />
              </div>
              <div className="tips-trick-body">
                <span className="tips-trick-category">{tip.category}</span>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
                <button className="button button-outline" style={{ fontSize: '11px', minHeight: '36px', padding: '0 20px' }}>
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default CookingTips;
