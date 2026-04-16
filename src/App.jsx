import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Methodology from './pages/Methodology';
import Activities from './pages/Activities';
import Results from './pages/Results';
import Team from './pages/Team';
import Tips from './pages/Tips';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/metodologia" element={<Methodology />} />
            <Route path="/atividades" element={<Activities />} />
            <Route path="/resultados" element={<Results />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/dicas" element={<Tips />} />
            {/* Redirecionamento para compatibilidade com links antigos .html */}
            <Route path="/index.html" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
