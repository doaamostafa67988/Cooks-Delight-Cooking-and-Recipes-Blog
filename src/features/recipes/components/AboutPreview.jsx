const AboutPreview = () => {
  return (
    <section className="about-section">
      <div className="about-copy">
        <span className="section-pill">ABOUT US</span>
        <h2>
          Our Culinary <br /> Chronicle
        </h2>
        <p>
          Our journey is crafted with dedication, creativity, and an unrelenting
          commitment to delivering delightful culinary experiences. Join us in
          savoring the essence of every dish and the stories that unfold.
        </p>
        <button className="button button-outline">READ MORE</button>
      </div>

      <img
        className="about-image about-image-top"
        src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=760&q=80"
        alt="Chef searing food in a pan"
      />
      <img
        className="about-image about-image-side"
        src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=760&q=80"
        alt="Cooks preparing food together"
      />
      <img
        className="about-image about-image-wide"
        src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=1100&q=80"
        alt="Steaming pot with vegetables"
      />
    </section>
  );
};

export default AboutPreview;
