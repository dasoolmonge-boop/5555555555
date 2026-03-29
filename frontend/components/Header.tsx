'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
      padding: isScrolled ? '0.8rem 0' : '1.2rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem'
      }}>
        <Link href="/" style={{ 
          fontSize: '1.6rem', 
          fontWeight: 800, 
          color: 'var(--primary)', 
          textDecoration: 'none',
          letterSpacing: '-1px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          ООО <span style={{ color: 'var(--secondary)', fontWeight: 300 }}>ЧАЛАМА</span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-only">
          {['rooms', 'yurts', 'restaurant', 'bar'].map((path) => (
            <Link 
              key={path} 
              href={`/${path}`}
              style={{
                textDecoration: 'none',
                color: 'var(--primary)',
                fontWeight: 600,
                fontSize: '0.95rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                transition: 'var(--transition)'
              }}
              className="nav-link-hover"
            >
              {path === 'rooms' ? 'Отель' : path === 'yurts' ? 'Хаан-Дыт' : path === 'restaurant' ? 'Ресторан' : 'Бар'}
            </Link>
          ))}
          <a href="tel:+73942221082" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '0.8rem 1.6rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 700,
            transition: 'var(--transition)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Phone size={16} />
            +7 (394) 222-10-82
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div style={{ display: 'none' }} className="mobile-only" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      <style jsx>{`
        .nav-link-hover::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: var(--secondary);
          transition: width 0.3s ease;
        }
        .nav-link-hover:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
        }
      `}</style>
    </header>
  );
}
