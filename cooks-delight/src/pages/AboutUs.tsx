// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import CTABanner from '@/features/recipes/components/CTABanner';

import girlImage from '@/assets/local/girl.jpg'; 
import img1 from '@/assets/local/1.jpg';
import img2 from '@/assets/local/2.jpg';
import img3 from '@/assets/local/3.jpg';
import img4 from '@/assets/local/4.jpg';
import img5 from '@/assets/local/5.jpg';
import img6 from '@/assets/local/6.jpg';
import img7 from '@/assets/local/7.jpg';
import img8 from '@/assets/local/8.jpg';

const RecipeDetails = () => {
  const [recipeId, setRecipeId] = useState(1);
  const [, setRecipe] = useState(null);
  const [similarRecipes, setSimilarRecipes] = useState([]); 
  const [loading, setLoading] = useState(true);
  
  const [currentMainImage, setCurrentMainImage] = useState(girlImage);
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const galleryImages = [
    { id: 1, src: img1, alt: 'Chef Team' },
    { id: 2, src: img2, alt: 'Preparing Food' },
    { id: 3, src: img3, alt: 'Tasting Soup' },
    { id: 4, src: img4, alt: 'Plating Dish' },
    { id: 5, src: img5, alt: 'Adding Garlic' },
    { id: 6, src: img6, alt: 'Chopping Vegetables' },
    { id: 7, src: img7, alt: 'Flour Dusting' },
    { id: 8, src: img8, alt: 'Taking Food Photo' },
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setLoading(true);
    
    fetch(`https://dummyjson.com/recipes/${recipeId}`)
      .then(res => res.json())
      .then(data => {
        setRecipe(data);
        setLoading(false);
      })
      .catch(err => console.error("Error fetching recipe:", err));

    const randomSkip = Math.floor(Math.random() * 20);
    fetch(`https://dummyjson.com/recipes?limit=2&skip=${randomSkip}`)
      .then(res => res.json())
      .then(data => setSimilarRecipes(data.recipes))
      .catch(err => console.error("Error fetching similar recipes:", err));

  }, [recipeId]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px', backgroundColor: '#F0EBE1', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
        Loading...
      </div>
    );
  }

  const isMobile = windowWidth <= 768;

  return (
    <div style={{ 
      fontFamily: "'Inter', sans-serif", 
      backgroundColor: '#F0EBE1', 
      minHeight: '100vh', 
      padding: isMobile ? '20px 3% 40px 3%' : '40px 5% 80px 5%',
      boxSizing: 'border-box'
    }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Birthstone+Bounce:wght@500;900&display=swap');
          @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
        `}
      </style>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ display: 'block', textAlign: 'left', marginBottom: isMobile ? '40px' : '60px' }}>
          <div style={{ display: isMobile ? 'block' : 'flex', justifyContent: 'space-between', gap: '40px' }}>
            
            <div style={{ flex: '0 0 55%', width: isMobile ? '100%' : '55%' }}>
              <h1 style={{ 
                fontSize: isMobile ? '38px' : '68px', 
                fontWeight: '900', 
                color: '#1A1A1A', 
                margin: '0', 
                lineHeight: '1.05', 
                letterSpacing: '-2px', 
                textTransform: 'uppercase' 
              }}>
                WELCOME TO <br /> MY CULINARY <br /> HAVEN!
              </h1>
            </div>

            <div style={{ flex: '1', paddingTop: isMobile ? '15px' : '20px' }}>
              <p style={{ 
                fontSize: isMobile ? '15px' : '16px', 
                color: '#4A4A4A', 
                lineHeight: '1.75', 
                letterSpacing: '0.5px', 
                wordSpacing: '1px', 
                margin: '0 0 30px 0',
                fontWeight: '400'
              }}>
                Bonjour and welcome to the heart of my kitchen! I'm Isabella Russo, the culinary enthusiast behind this haven of flavors, Cooks Delight. Join me on a gastronomic journey where each dish carries a story, and every recipe is a crafted symphony of taste.
              </p>
              
              <button style={{ 
                backgroundColor: '#E29547', 
                color: '#1A1A1A', 
                border: 'none', 
                padding: '16px 40px', 
                borderRadius: '100px', 
                fontSize: '13px', 
                fontWeight: '600', 
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '1.5px'
              }}>
                EXPLORE RECIPES
              </button>
            </div>

          </div>
        </div>
        
        <div style={{
          border: '1px solid #D1D1D1',
          borderRadius: isMobile ? '24px' : '40px',
          padding: isMobile ? '25px 20px' : '40px',
          backgroundColor: '#F0EBE1',
          marginBottom: '40px'
        }}>
          
          <div style={{
            display: isMobile ? 'block' : 'flex',
            gap: '50px',
            alignItems: 'flex-start',
            marginBottom: isMobile ? '40px' : '60px'
          }}>
            <div style={{ 
              flex: isMobile ? '1' : '0 0 45%', 
              width: isMobile ? '100%' : '45%',
              marginBottom: isMobile ? '30px' : '0'
            }}>
              <div style={{ width: '100%', overflow: 'hidden', borderRadius: '24px', marginBottom: '15px' }}>
                <img 
                  src={currentMainImage} 
                  alt="Selected Profile View" 
                  style={{ 
                    width: '100%', 
                    height: isMobile ? '320px' : '470px', 
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'brightness(1.1)',
                    transition: 'all 0.5s ease'
                  }} 
                />
              </div>
              
              <div style={{
                border: '1px solid #262522', 
                borderRadius: '100px',
                padding: '12px 25px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '1px', color: '#262522' }}>FOLLOW ME</span>
                <div style={{ display: 'flex', gap: '15px', fontSize: '18px', color: '#262522' }}>
                  <i className="fa-brands fa-square-facebook" style={{ cursor: 'pointer' }}></i>
                  <i className="fa-brands fa-square-instagram" style={{ cursor: 'pointer' }}></i>
                  <i className="fa-brands fa-youtube" style={{ cursor: 'pointer' }}></i>
                </div>
              </div>
            </div>

            <div style={{ flex: '1', textAlign: 'left' }}>
              <h2 style={{
                fontSize: isMobile ? '26px' : '40px',
                fontWeight: '900',
                color: '#1A1A1A',
                margin: '0 0 5px 0',
                lineHeight: '1.15',
                textTransform: 'uppercase',
                letterSpacing: '-1px'
              }}>
                FROM ITALIAN ROOTS TO <br /> GLOBAL PALATES
              </h2>
              
              <div style={{ fontSize: isMobile ? '14px' : '15px', color: '#595856', lineHeight: '1.7', fontWeight: '400' }}>
                <p style={{ margin: '0 0 13px 0' }}>
                  Born and raised in the vibrant culinary landscape of Italy, my journey with food began in the heart of my family's kitchen. Surrounded by the aroma of fresh herbs, the sizzle of pans, and the laughter of loved ones, I developed a deep appreciation for the art of cooking. My culinary education took me from the historic streets of Rome to the bustling markets of Florence, where I honed my skills and cultivated a love for the simplicity and authenticity of Italian cuisine.
                </p>
                <p style={{ margin: '0 0 13px 0' }}>
                  Driven by a relentless curiosity, I embarked on a global culinary exploration, seeking inspiration from the rich tapestry of flavors found in kitchens around the world. From the spicy markets of Marrakech to the sushi stalls of Tokyo, each experience added a unique brushstroke to my culinary canvas.
                </p>
                <p style={{ margin: '0 0 2px 0' }}>
                  Whether you're a seasoned home cook or just starting your culinary adventure, I'm delighted to have you here. Let's stir, simmer, and savor the beauty of creating something wonderful together.
                </p>
              </div>

              <div style={{ marginTop: '11px', lineHeight: '1' }}>
                <span style={{ display: 'block', fontSize: '13px', color: '#555', fontStyle: 'italic', marginBottom: '2px' }}>
                  Warmest regards,
                </span>
                <span style={{ 
                  display: 'inline-block', 
                  fontFamily: "'Birthstone Bounce', cursive", 
                  fontSize: '30px', 
                  fontWeight: '900', 
                  color: '#595856',
                  letterSpacing: '0px', 
                  marginTop: '8px' 
                }}>
                  Isabella Russo
                </span>
              </div>
            </div>

          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', 
            gap: isMobile ? '12px' : '20px', 
            width: '100%'
          }}>
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                onClick={() => setCurrentMainImage(image.src)} 
                style={{ 
                  width: '100%', 
                  paddingBottom: '100%', 
                  position: 'relative',
                  borderRadius: isMobile ? '16px' : '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: currentMainImage === image.src ? '3px solid #E29547' : 'none', 
                  transition: 'border 0.2s ease'
                }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s ease', 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>

        </div>

        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            backgroundColor: "#F0EBE1",
            padding: "30px 0",
          }}
        >
          <div
            style={{
              maxWidth: "1150px",
              margin: "0 auto",
              border: "1px solid #D1D1D1",
              borderRadius: "40px",
              padding: isMobile ? "30px 15px" : "40px 20px",
              backgroundColor: "#F0EBE1",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "35px",
                flexWrap: "wrap",
                gap: "15px",
              }}
            >
              <h2
                style={{
                  fontSize: isMobile ? "22px" : "32px",
                  fontWeight: "900",
                  color: "#1A1A1A",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                SIMILAR RECIPES
              </h2>

              <div style={{ display: "flex", gap: "8px" }}>
                <div
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    border: "1px solid #D1D1D1",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#D1D1D1",
                  }}
                >
                  <i
                    className="fa-solid fa-chevron-left"
                    style={{ fontSize: "14px" }}
                  ></i>
                </div>

                <div
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    border: "1px solid #1A1A1A",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#1A1A1A",
                  }}
                >
                  <i
                    className="fa-solid fa-chevron-right"
                    style={{ fontSize: "14px" }}
                  ></i>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : "repeat(2, minmax(0, 1fr))",
                gap: "30px",
                width: "100%",
              }}
            >
              {similarRecipes.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setRecipeId(item.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  style={{
                    backgroundColor: "#FFFBF2",
                    borderRadius: "25px",
                    overflow: "hidden",
                    border: "1px solid rgba(0,0,0,0.05)",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <div style={{ padding: "20px" }}>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "800",
                        color: "#1A1A1A",
                        margin: "0 0 10px 0",
                      }}
                    >
                      {item.name}
                    </h3>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "10px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: "800",
                          color: "#1A1A1A",
                        }}
                      >
                        {item.prepTimeMinutes} MIN -{" "}
                        {item.difficulty?.toUpperCase()}
                      </span>

                      <button
                        style={{
                          backgroundColor: "transparent",
                          border: "1px solid #1A1A1A",
                          padding: "8px 15px",
                          borderRadius: "100px",
                          fontSize: "10px",
                          fontWeight: "800",
                        }}
                      >
                        VIEW RECIPE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div style={{ padding: '30px 0' }}>
          <CTABanner />
        </div>

      </div>

      <Footer />
      
    </div>
  );
};

export default RecipeDetails;
