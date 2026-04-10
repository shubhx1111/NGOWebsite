import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X, Languages, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="text-primary-600 fill-primary-600" size={32} />
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Akash Kashyap <span className="text-primary-600">Foundation</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">{t('home')}</Link>
          <Link to="/about" className="nav-link">{t('about')}</Link>
          <Link to="/contact" className="nav-link">{t('contact')}</Link>
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-2 text-slate-600 hover:text-primary-600 font-bold transition-colors"
          >
            <Languages size={18} />
            <span className="uppercase">{i18n.language.split('-')[0]}</span>
          </button>

          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/panel" className="flex items-center space-x-2 text-primary-600 font-bold">
                <User size={20} />
                <span>{user.name.split(' ')[0]}</span>
              </Link>
              <button 
                onClick={logout}
                className="text-slate-600 hover:text-red-500 font-bold transition-colors"
              >
                {t('logout')}
              </button>
            </div>
          ) : (
            <Link to="/login" className="nav-link font-bold text-slate-900 border-x px-4 border-slate-200">
              {t('login')}
            </Link>
          )}

          <Link to="/donate" className="btn-primary">
            {t('donate')}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-900">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-6 px-6 space-y-4 shadow-xl">
          <Link to="/" className="block nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block nav-link" onClick={() => setIsOpen(false)}>Our Work</Link>
          <Link to="/contact" className="block nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/donate" className="block btn-primary text-center" onClick={() => setIsOpen(false)}>
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
