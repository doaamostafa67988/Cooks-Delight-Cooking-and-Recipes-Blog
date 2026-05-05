import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 7h14M5 12h14M5 17h14" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m7 7 10 10M17 7 7 17" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m15.5 15.5 4 4M10.5 17a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Z" />
  </svg>
);

const mobileSocialIcons = [
  {
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M17 7.1h.01" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 8.5c.2-1.4 1.3-2.4 2.7-2.6A42 42 0 0 1 12 5.7c1.6 0 3.2 0 4.8.2 1.4.2 2.5 1.2 2.7 2.6.2 1.1.3 2.3.3 3.5s-.1 2.4-.3 3.5c-.2 1.4-1.3 2.4-2.7 2.6-1.6.2-3.2.2-4.8.2s-3.2 0-4.8-.2c-1.4-.2-2.5-1.2-2.7-2.6A21 21 0 0 1 4.2 12c0-1.2.1-2.4.3-3.5Z" />
        <path d="m10.5 9.5 4 2.5-4 2.5v-5Z" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  return (
    <nav className="site-nav">
      <a href="/" className="brand" aria-label="Cooks Delight home">
        <div className="brand-mark">
          <span></span>
        </div>
        <span>
          Cooks
          <br />
          Delight
        </span>
      </a>

      <div className="nav-links">
        <a href="/" className="active">
          HOME
        </a>
        <a href="/recipes">RECIPES</a>
        <a href="/tips">COOKING TIPS</a>
        <a href="/about">ABOUT US</a>
      </div>

      <button className="icon-button nav-search" aria-label="Search">
        <SearchIcon />
      </button>
      <button
        className="icon-button nav-menu"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>

      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-panel">
            <div className="mobile-menu-header">
              <a
                href="/"
                className="brand brand-dark"
                aria-label="Cooks Delight home"
              >
                <div className="brand-mark">
                  <span></span>
                </div>
                <span>
                  Cooks
                  <br />
                  Delight
                </span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="icon-button menu-close"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="mobile-links">
              <a href="/">HOME</a>
              <a href="/recipes">RECIPES</a>
              <a href="/tips">COOKING TIPS</a>
              <a href="/about">ABOUT US</a>
            </div>

            <div className="mobile-menu-actions">
              <button className="icon-button menu-search" aria-label="Search">
                <SearchIcon />
              </button>
              <Link
                to="/login"
                className="menu-signup"
                onClick={() => setIsOpen(false)}
              >
                SIGN UP NOW!
              </Link>
            </div>

            <div className="social-links" aria-label="Social links">
              {mobileSocialIcons.map((item) => (
                <a href="/" key={item.label} aria-label={item.label}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
