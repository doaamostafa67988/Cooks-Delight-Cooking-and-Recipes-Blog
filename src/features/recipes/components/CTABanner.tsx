// @ts-nocheck
import React from 'react';

const CTABanner = () => {

  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <div style={{
      maxWidth: '1200px',     
      margin: '0 auto',       
      backgroundColor: '#EE6352',
      backgroundImage: `
        radial-gradient(circle at 0% 50%, rgba(0,0,0,0.1) 0%, transparent 60%),
        radial-gradient(circle at 100% 50%, rgba(0,0,0,0.1) 0%, transparent 60%)
      `,
      borderRadius: '40px',
      padding: isMobile ? '60px 15px' : '100px 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '25px' }}>
          SIGN UP
        </span>
        <h2 style={{ 
          color: '#FFFBF2', 
          fontSize: isMobile ? '28px' : 'clamp(32px, 5vw, 85px)', 
          fontWeight: '900', 
          lineHeight: isMobile ? '1.2' : '1.05', 
          margin: '0 0 30px 0', 
          textTransform: 'uppercase', 
          maxWidth: '1000px', 
          letterSpacing: '-1px' 
        }}>
          JOIN THE FUN <br /> CREATE ACCOUNT NOW!
        </h2>
        <p style={{ color: '#FFFBF2', fontSize: isMobile ? '15px' : '18px', lineHeight: '1.4', maxWidth: '650px', margin: '0 auto 45px auto', fontWeight: '400', opacity: '0.9', padding: '0 10px' }}>
          Create an account to save your favorite recipes, share your own dishes, and enjoy a personalized cooking experience.
        </p>
        <button style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', padding: '18px 50px', borderRadius: '100px', border: 'none', fontSize: '14px', fontWeight: '500', cursor: 'pointer', textTransform: 'uppercase' }}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default CTABanner;