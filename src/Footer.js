import React from 'react';

const Footer = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 800;

  return (
    <footer style={{ padding: '0 5% 40px 5%', backgroundColor: '#F0EBE1' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#1A1A1A', 
          borderRadius: '40px',
          padding: isMobile ? '30px 20px' : '40px 60px',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px'
        }}
      >

        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: isMobile ? '25px' : '20px',
          textAlign: 'center'
        }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ 
              backgroundColor: '#FFFBF2', 
              width: '45px', 
              height: '45px', 
              borderRadius: '50%', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}>
              <i className="fa-brands fa-figma" style={{ color: '#1A1A1A', fontSize: '20px' }}></i>
            </div>
            <span style={{ fontWeight: '800', fontSize: '18px', letterSpacing: '0.5px', lineHeight: '1.1', textAlign: 'left' }}>
              COOKS<br />DELIGHT
            </span>
          </div>

          <nav style={{ display: 'flex', gap: isMobile ? '15px' : '30px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { label: 'HOME', href: '/' },
              { label: 'RECIPES', href: '/recipes' },
              { label: 'COOKING TIPS', href: '/tips' },
              { label: 'ABOUT US', href: '/about' },
            ].map((link, index) => (
              <React.Fragment key={link.label}>
                <a href={link.href} style={{ 
                  color: '#FFFFFF', 
                  textDecoration: 'none', 
                  fontSize: '12px', 
                  fontWeight: '700',
                  letterSpacing: '1px'
                }}>
                  {link.label}
                </a>
                {!isMobile && index < 3 && <span style={{ color: '#333', fontSize: '12px' }}>|</span>}
              </React.Fragment>
            ))}
          </nav>

          <div style={{ display: 'flex', gap: '20px', fontSize: '20px', alignItems: 'center' }}>
            <i className="fa-brands fa-tiktok" style={{ cursor: 'pointer' }}></i>
            <i className="fa-brands fa-square-facebook" style={{ cursor: 'pointer' }}></i>
            <i className="fa-brands fa-instagram" style={{ cursor: 'pointer' }}></i>
            <i className="fa-brands fa-youtube" style={{ cursor: 'pointer' }}></i>
          </div>
        </div>


        <div style={{ width: '100%', height: '1.5px', backgroundColor: '#2A2A2A' }}></div>

        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#918F8A', fontSize: '10px', fontWeight: '600', margin: 0, letterSpacing: '1px', textTransform: 'uppercase' }}>
            COPYRIGHT: © 2024 COOKS DELIGHT.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;