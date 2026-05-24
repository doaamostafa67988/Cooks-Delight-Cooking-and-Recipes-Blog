// @ts-nocheck
import { Link } from '@/lib/router-compat';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img src="/assets/hero-section.png" alt="Chef cooking in a warm kitchen" />
      <div className="hero-overlay">
        <h1>
          Unleash Culinary <br /> Excellence
        </h1>
        <p>
          Explore a world of flavors, discover handcrafted recipes, and let the
          aroma of our passion for cooking fill your kitchen.
        </p>
        <div className="hero-actions">
          <Link to="/login" className="button button-primary">
            Sign Up Now!
          </Link>
          <button className="button button-dark">Explore Recipes</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
