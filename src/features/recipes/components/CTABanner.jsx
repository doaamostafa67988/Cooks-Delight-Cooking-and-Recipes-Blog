import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <span>SIGN UP</span>
      <h2>
        Join the fun <br /> Create account now!
      </h2>
      <p>
        Create an account to save your favorite recipes, share your own dishes,
        and enjoy a personalized cooking experience.
      </p>
      <Link to="/login" className="button button-dark">
        SIGN UP
      </Link>
    </section>
  );
};

export default CTABanner;
