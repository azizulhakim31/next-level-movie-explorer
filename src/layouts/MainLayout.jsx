import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';

function MainLayout() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 antialiased selection:bg-cyan-400 selection:text-slate-950">
            <Navbar />

            <Outlet />

            <Footer />
        </div>
    );
};

export default MainLayout;