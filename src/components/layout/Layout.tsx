import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => (
  <div className="relative min-h-screen">
    {/* Background blobs */}
    <div className="fixed -top-[30%] -right-[15%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(100,0,200,0.06)_0%,transparent_60%)] pointer-events-none z-0" />
    <div className="fixed -bottom-[25%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(140,50,220,0.04)_0%,transparent_60%)] pointer-events-none z-0" />

    <Navbar />
    <main className="relative z-10">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
