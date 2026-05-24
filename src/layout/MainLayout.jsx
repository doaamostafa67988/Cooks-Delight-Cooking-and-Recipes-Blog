import Footer from '../components/Footer';
import Navbar from '../features/recipes/components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="app-container">
      <Navbar />

      <main className="content">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
