import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import CTABanner from './features/recipes/components/CTABanner';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipeId, setRecipeId] = useState(Number(id) || 1);
  const [similarRecipes, setSimilarRecipes] = useState([]); 
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const nextId = Number(id) || 1;
    setRecipeId(nextId);
  }, [id]);

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
  
  if (loading) return <div style={{ textAlign: 'center', padding: '100px', backgroundColor: '#F0EBE1', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>Loading...</div>;

  const isMobile = windowWidth <= 768;

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#F0EBE1', minHeight: '100vh', padding: isMobile ? '20px 3% 40px 3%' : '40px 5% 80px 5%' }}>

      <div style={{ 
        maxWidth: '1150px', 
        margin: '0 auto 50px auto', 
        border: '1px solid #D1D1D1', 
        borderRadius: isMobile ? '25px' : '50px', 
        padding: isMobile ? '20px 15px' : '40px 0px', 
        backgroundColor: '#F0EBE1' 
      }}>

        <div style={{ textAlign: 'center', paddingTop: isMobile ? '10px' : '40px', paddingBottom: '20px' }}>
          <div style={{ marginBottom: '25px' }}>
            <span style={{ backgroundColor: '#EE6352', color: '#fff', padding: '6px 16px', borderRadius: '100px', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>RECIPE</span>
          </div>
<h1 style={{ 
            fontSize: isMobile ? '32px' : '54px', 
            fontWeight: '900', 
            color: '#1A1A1A', 
            margin: '0 auto 20px auto', 
            maxWidth: '900px', 
            lineHeight: '1.1', 
            letterSpacing: '-1px', 
            textTransform: 'uppercase',
            padding: '0 10px'
          }}>
            {recipe.name}
          </h1>
          <p style={{ fontSize: isMobile ? '15px' : '18px', color: '#4A4A4A', maxWidth: '600px', margin: '0 auto 35px auto', lineHeight: '1.6', padding: '0 15px' }}>
            Welcome to Cooks Delight, where culinary dreams come alive! Today, we embark on a journey of flavors with a dish that promises to elevate your dining experience.
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: isMobile ? '8px' : '15px', 
            color: '#000', 
            fontSize: isMobile ? '11px' : '14px', 
            fontWeight: '700',
            flexWrap: 'wrap'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fa-solid fa-stopwatch"></i> {recipe.prepTimeMinutes + recipe.cookTimeMinutes} MINUTES</span>
            <span style={{ fontSize: '14px', fontWeight: '900' }}>•</span> 
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fa-solid fa-weight-hanging"></i> {recipe.difficulty?.toUpperCase()}</span>
            <span style={{ fontSize: '14px', fontWeight: '900' }}>•</span> 
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fa-solid fa-utensils"></i> {recipe.servings} SERVES</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', margin: isMobile ? '20px 0' : '40px 0', padding: isMobile ? '0' : '0 20px' }}>
          <img 
            src={recipe.image} 
            alt={recipe.name} 
            style={{ 
              width: '100%', 
              maxWidth: '1100px', 
              borderRadius: isMobile ? '20px' : '40px', 
              height: isMobile ? '250px' : '480px', 
              objectFit: 'cover' 
            }} 
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: isMobile ? '30px' : '60px', padding: '0 15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? '10px' : '20px', flexWrap: 'wrap' }}>
            <div style={{ color: '#F29C33', fontSize: isMobile ? '18px' : '26px', display: 'flex', gap: '6px', alignItems: 'center' }}>
              <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke" style={{ fontWeight: '0' ,fontSize: isMobile ? '24px' : '35px'}}></i>
            </div>
            <span style={{ fontSize: '20px', fontWeight: '900' }}>•</span>
            <span style={{ fontSize: isMobile ? '13px' : '15px', fontWeight: '700', color: '#000' }}>98 REVIEWS</span>
            <span style={{ fontSize: '20px', fontWeight: '900' }}>•</span>
            <span style={{ backgroundColor: '#EE6352', color: '#000', padding: '6px 16px', borderRadius: '100px', fontSize: '11px', fontWeight: '800' }}>PIZZA</span>
            <span style={{ fontSize: '20px', fontWeight: '900' }}>•</span>
            <span style={{ backgroundColor: '#9FDC26', color: '#000', padding: '6px 16px', borderRadius: '100px', fontSize: '11px', fontWeight: '800' }}>ITALIAN</span>
          </div>
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: isMobile ? '28px' : '42px', fontWeight: '900', color: '#1A1A1A', textTransform: 'uppercase', marginBottom: '20px', textAlign: 'left' }}>INSTRUCTIONS</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1.6fr 1fr', 
            gap: isMobile ? '30px' : '60px', 
            alignItems: 'start' 
          }}>

            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: isMobile ? '16px' : '18px', color: '#918F8A', lineHeight: '1.5' }}>
                {recipe.instructions?.map((step, index) => (
                  <div key={index} style={{ marginBottom: '0px' }}>
                    <p style={{ margin: '0', padding: '2px 0' }}>
                      <span style={{ fontWeight: '900', color: '#6e6c68', marginRight: '5px' }}>Step {index + 1})</span>
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '35px', display: 'inline-flex', alignItems: 'center', gap: '30px', padding: '15px 35px', border: '1.5px solid #000000', borderRadius: '100px' }}>
                <span style={{ fontSize: '14px', fontWeight: '800', color: '#1A1A1A', letterSpacing: '1.5px' }}>SHARE</span>
                <div style={{ display: 'flex', gap: '20px', fontSize: '20px', color: '#1A1A1A', alignItems: 'center' }}>
                  <i className="fa-brands fa-square-facebook" style={{ cursor: 'pointer' }}></i>
                  <i className="fa-brands fa-square-instagram" style={{ cursor: 'pointer' }}></i>
                  <i className="fa-brands fa-youtube" style={{ cursor: 'pointer' }}></i>
                </div>
              </div>
              <div style={{ width: '100%', height: '1.5px', backgroundColor: '#D1D1D1', marginTop: '40px', marginBottom: '10px' }}></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ backgroundColor: '#FFFBF2', padding: '20px 25px', borderRadius: '35px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '15px', color: '#EE6352', marginTop: '0' }}>INGREDIENTS</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {recipe.ingredients?.map((ing, i) => (
                    <li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'start', gap: '12px', fontSize: isMobile ? '16px' : '18px', color: '#1A1A1A', fontWeight: '500' }}>
                      <span style={{ color: '#000', fontWeight: '900' }}>•</span> {ing}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ backgroundColor: '#FFFBF2', padding: '20px 25px', borderRadius: '35px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '11px', color: '#EE6352', marginTop: '0' }}>NUTRITIONAL VALUE</h3>
                <p style={{ margin: '0 0 5px 0', fontSize: '16px', color: '#918F8A' }}>Per serving:</p>
                <p style={{ margin: '0', fontSize: '18px', fontWeight: '700', color: '#1A1A1A' }}>Calories: <span style={{ color: '#918F8A', fontWeight: '500' }}>~300</span></p>
              </div>
              
              <p style={{ fontSize: '12px', color: '#918F8A', lineHeight: '1.4', marginTop: '0px', padding: '0 15px', textTransform: 'uppercase' }}>
                Note: Nutritional values are approximate and may vary based on specific ingredients and portion sizes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#F0EBE1", padding: "30px 0" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto", border: "1px solid #D1D1D1", borderRadius: "40px", padding: isMobile ? "30px 15px" : "40px 20px", backgroundColor: "#F0EBE1" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "35px", flexWrap: "wrap", gap: "15px" }}>
            <h2 style={{ fontSize: isMobile ? "22px" : "32px", fontWeight: "900", color: "#1A1A1A", textTransform: "uppercase", margin: 0 }}>
              SIMILAR RECIPES
            </h2>
            <div style={{ display: "flex", gap: "8px" }}>
              <div style={{ width: "35px", height: "35px", borderRadius: "50%", border: "1px solid #D1D1D1", display: "flex", justifyContent: "center", alignItems: "center", color: "#D1D1D1" }}>
                <i className="fa-solid fa-chevron-left" style={{ fontSize: "14px" }}></i>
              </div>
              <div style={{ width: "35px", height: "35px", borderRadius: "50%", border: "1px solid #1A1A1A", display: "flex", justifyContent: "center", alignItems: "center", color: "#1A1A1A" }}>
                <i className="fa-solid fa-chevron-right" style={{ fontSize: "14px" }}></i>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))", gap: "30px", width: "100%" }}>
            {similarRecipes.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setRecipeId(item.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                style={{ backgroundColor: "#FFFBF2", borderRadius: "25px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.05)", cursor: "pointer", width: "100%" }}
              >
                <img src={item.image} alt={item.name} style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} />
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#1A1A1A", margin: "0 0 10px 0" }}>{item.name}</h3>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "800", color: "#1A1A1A" }}>
                      {item.prepTimeMinutes} MIN - {item.difficulty?.toUpperCase()}
                    </span>
                    <button style={{ backgroundColor: "transparent", border: "1px solid #1A1A1A", padding: "8px 15px", borderRadius: "100px", fontSize: "10px", fontWeight: "800" }}>
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

      <Footer />

    </div>
  );
};

export default RecipeDetails;
