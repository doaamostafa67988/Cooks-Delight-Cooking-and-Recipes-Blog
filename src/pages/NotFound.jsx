import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="site-shell">
      <div className="not-found-page">
        <div className="not-found-inner">
          <div className="not-found-number">
            <span>4</span>
            <div className="not-found-plate">
              <div className="not-found-plate-inner">
                <span className="not-found-emoji">🍽️</span>
              </div>
            </div>
            <span>4</span>
          </div>

          <div className="not-found-content">
            <span className="section-pill">Oops!</span>
            <h1>Page Not Found</h1>
            <p>
              Looks like this recipe got burned. The page you're looking for
              doesn't exist or may have been moved to a different kitchen.
            </p>
            <div className="not-found-actions">
              <Link to="/" className="button button-primary">Back to Home</Link>
              <Link to="/recipes" className="button button-dark">Browse Recipes</Link>
            </div>
          </div>

          <div className="not-found-suggestions">
            <p className="not-found-suggestions-label">Try one of these instead:</p>
            <div className="not-found-links">
              <Link to="/recipes">All Recipes</Link>
              <Link to="/tips">Cooking Tips</Link>
              <Link to="/about">About Us</Link>
              <Link to="/login">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
