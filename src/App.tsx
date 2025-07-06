// import react, { useState } from 'react'
import './App.css'
import './AppNavbar.css'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import News from './pages/News'
import Articles from './pages/Articles'
import UnitsGuide from './pages/UnitsGuide'
import Laws from './pages/Laws'
import Contact from './pages/Contact'
import PassportService from './pages/PassportService';
import DrivingLicenseService from './pages/DrivingLicenseService';
import CertificatesService from './pages/CertificatesService';
import CivilRegistryService from './pages/CivilRegistryService';
import InquiryService from './pages/InquiryService';
import Footer from './components/Footer';

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { to: '/', label: 'الرئيسية' },
    { to: '/about', label: 'عن الوزارة' },
    { to: '/services', label: 'الخدمات' },
    { to: '/news', label: 'الأخبار' },
    { to: '/articles', label: 'المقالات' },
    { to: '/units', label: 'دليل الوحدات' },
    { to: '/laws', label: 'القوانين' },
    { to: '/contact', label: 'اتصل بنا' },
  ];
  return (
    <nav className={`main-navbar${open ? ' open' : ''}`} dir="rtl">
      <button className="menu-toggle" aria-label="فتح القائمة" onClick={() => setOpen(v => !v)}>
        <span>{open ? '✕' : '☰'}</span>
      </button>
      <div className="nav-links" style={{ display: open ? 'flex' : undefined }} onClick={() => setOpen(false)}>
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={location.pathname === link.to ? 'active' : ''}
            style={{}}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function App() {
  return (
    <div dir="rtl" style={{fontFamily: 'Tajawal, Arial, sans-serif', background: '#f7f7f7', minHeight: '100vh', display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Router>
        <Navbar />
        <div style={{maxWidth: 900, margin: '32px auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 24, flex: 1}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/passport" element={<PassportService />} />
            <Route path="/services/driving-license" element={<DrivingLicenseService />} />
            <Route path="/services/certificates" element={<CertificatesService />} />
            <Route path="/services/civil-registry" element={<CivilRegistryService />} />
            <Route path="/services/inquiry" element={<InquiryService />} />
            <Route path="/news" element={<News />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/units" element={<UnitsGuide />} />
            <Route path="/laws" element={<Laws />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
