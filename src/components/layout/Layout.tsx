import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';

const Layout = () => (
  <div className="relative min-h-screen">
    <Navbar />
    <main className="relative z-10">
      <Outlet />
    </main>
    <Footer />
    <BackToTop />
  </div>
);

export default Layout;
