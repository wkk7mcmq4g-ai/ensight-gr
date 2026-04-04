import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import PageTransition from './PageTransition';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
