import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home';
import Services from './pages/services';
import Booking from './pages/booking';
import About from './pages/about';
import Experts from './pages/experts';
import Contact from './pages/contact';
import ServiceDetail from './pages/service-detail';
import ExpertDetail from './pages/expert-detail';
import FloatingChat from './components/floating-chat';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
import Cookie from './pages/cookie';
import CookiePreferences from './pages/preferences';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-shell" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1, marginTop: '80px' }}>  {/* Changed from 120px to 80px */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/experts/:id" element={<ExpertDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie" element={<Cookie />} />
            <Route path="/preferences" element={<CookiePreferences />} />
          </Routes>
        </main>
        <Footer />
        <FloatingChat />
      </div>
    </Router>
  );
}

export default App;