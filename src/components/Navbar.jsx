import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/', end: true },
    { name: 'Metodologia', path: '/metodologia' },
    { name: 'Atividades', path: '/atividades' },
    { name: 'Resultados', path: '/resultados' },
    { name: 'Equipe', path: '/equipe' },
    { name: 'Dicas', path: '/dicas' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 h-20 ${
      scrolled 
        ? 'bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-full">
        <Link 
          to="/" 
          className={`text-xl md:text-2xl font-bold tracking-tighter font-headline transition-colors ${
            scrolled ? 'text-primary' : 'text-primary'
          }`} 
          onClick={() => setIsOpen(false)}
        >
          EcoAção
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center font-headline text-sm tracking-tight">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path}
              end={link.end}
              className={({ isActive }) => `relative py-2 transition-all duration-300 font-medium ${
                isActive 
                  ? 'text-primary after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' 
                  : 'text-on-surface-variant hover:text-primary'
              }`} 
              to={link.path}
            >
              {link.name}
            </NavLink>
          ))}
          <Link 
            to="/#contact"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-headline text-sm font-bold hover:scale-105 transition-all shadow-ambient active:scale-95"
          >
            Contato
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary p-2 rounded-xl hover:bg-primary/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-[80vh] py-8 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center gap-4 px-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path}
              end={link.end}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `text-xl font-headline w-full text-center py-3 rounded-2xl transition-colors ${
                isActive ? 'bg-primary/5 text-primary font-bold' : 'text-on-surface-variant'
              }`} 
              to={link.path}
            >
              {link.name}
            </NavLink>
          ))}
          <Link 
            to="/#contact"
            onClick={() => setIsOpen(false)}
            className="w-full bg-primary text-on-primary py-4 rounded-2xl font-headline font-bold text-center shadow-lg mt-4 active:scale-95 transition-transform"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


