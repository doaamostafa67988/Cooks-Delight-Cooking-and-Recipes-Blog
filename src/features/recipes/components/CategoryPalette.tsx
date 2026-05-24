// @ts-nocheck
const categories = [
  { id: 1, name: 'BREAKFAST', icon: 'leaf' },
  { id: 2, name: 'LUNCH', icon: 'bowl' },
  { id: 3, name: 'DINNER', icon: 'burger' },
  { id: 4, name: 'DESSERT', icon: 'cake' },
  { id: 5, name: 'SNACK', icon: 'taco' },
];

const icons = {
  leaf: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 13c0-5.5 4.5-9 13.5-9 1.4 8.8-2 14-8.1 14C6.1 18 4 16 4 13Z" />
      <path d="M5.5 14.5 14 9" />
      <path d="m8 9 2.5 2.5M10 6.5l4 4" />
    </svg>
  ),
  bowl: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 11h16a8 8 0 0 1-16 0Z" />
      <path d="M7 11c.2-2.3 2.2-4 5-4s4.8 1.7 5 4" />
      <path d="M8 15h8" />
      <circle cx="9" cy="9" r="1" />
      <circle cx="12" cy="8" r="1" />
      <circle cx="15" cy="9" r="1" />
    </svg>
  ),
  burger: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 11c.3-3.4 3.2-6 7-6s6.7 2.6 7 6H5Z" />
      <path d="M5 14h14" />
      <path d="M6 17h12v2H6z" />
      <path d="M8 11h8" />
    </svg>
  ),
  cake: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 8h10v12H7z" />
      <path d="M5 12h14M5 16h14" />
      <path d="M9 8V5M12 8V5M15 8V5" />
      <path d="M8.5 5.5h1M11.5 5.5h1M14.5 5.5h1" />
    </svg>
  ),
  taco: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 15c1.2-5.5 5-8 10.5-6.8 3.1.7 4.9 2.8 5.5 6.8l-7 5-9-5Z" />
      <path d="m7 14 2.5 1.3M11 13l2.2 1.6M15 12.8l2.2 1.5" />
      <circle cx="10" cy="10.5" r=".8" />
      <circle cx="14" cy="11" r=".8" />
    </svg>
  ),
};

const CategoryPalette = () => {
  return (
    <section className="category-section">
      <div className="category-copy">
        <span className="section-pill">EXPLORE</span>
        <h2>OUR DIVERSE PALETTE</h2>
        <p>
          If you are a breakfast enthusiast, a connoisseur of savory delights,
          or on the lookout for desserts, we have something to satisfy every
          palate.
        </p>
        <button className="button button-outline">SEE MORE</button>
      </div>

      <div className="category-list">
        {categories.map((cat) => (
          <div key={cat.id} className="category-row">
            <span className="category-icon">
              {icons[cat.icon]}
            </span>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryPalette;
