// @ts-nocheck
const socialIcons = {
  tiktok: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 4v10.2a3.8 3.8 0 1 1-3.8-3.8" />
      <path d="M14 6.3c1.1 1.8 2.8 2.8 5 3" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17 7.1h.01" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 8.5c.2-1.4 1.3-2.4 2.7-2.6A42 42 0 0 1 12 5.7c1.6 0 3.2 0 4.8.2 1.4.2 2.5 1.2 2.7 2.6.2 1.1.3 2.3.3 3.5s-.1 2.4-.3 3.5c-.2 1.4-1.3 2.4-2.7 2.6-1.6.2-3.2.2-4.8.2s-3.2 0-4.8-.2c-1.4-.2-2.5-1.2-2.7-2.6A21 21 0 0 1 4.2 12c0-1.2.1-2.4.3-3.5Z" />
      <path d="m10.5 9.5 4 2.5-4 2.5v-5Z" />
    </svg>
  ),
};

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a href="/" className="brand footer-brand" aria-label="Cooks Delight home">
          <div className="brand-mark">
            <span></span>
          </div>
          <span>
            Cooks
            <br />
            Delight
          </span>
        </a>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="/">HOME</a>
          <a href="/recipes">RECIPES</a>
          <a href="/tips">COOKING TIPS</a>
          <a href="/about">ABOUT US</a>
        </nav>

        <div className="footer-social" aria-label="Social links">
          <a href="/" aria-label="TikTok">
            {socialIcons.tiktok}
          </a>
          <a href="/" aria-label="Facebook">
            {socialIcons.facebook}
          </a>
          <a href="/" aria-label="Instagram">
            {socialIcons.instagram}
          </a>
          <a href="/" aria-label="YouTube">
            {socialIcons.youtube}
          </a>
        </div>
      </div>
      <p>COPYRIGHT: © 2024 COOKS DELIGHT.</p>
    </footer>
  );
};

export default Footer;
