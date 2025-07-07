// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fungsi untuk mendapatkan kelas navigasi desktop
  const getNavLocation = (path) => {
    // Kelas dasar untuk item navigasi desktop
    let classes = "nav-item-gradient-hover";

    // Periksa jika jalur saat ini cocok dengan jalur tautan
    const isActive = location.pathname === path;

    // Tambahkan kelas aktif jika sedang di halaman tersebut
    if (isActive) {
      // Perhatikan penggunaan 'text-[#067aff]' yang benar (dengan '#')
      classes += " font-bold text-[#067aff] border-b-2 border-[#067aff]";
    }

    return classes;
  };

  // Fungsi untuk mendapatkan kelas navigasi mobile
  const getNavLocationMobile = (path) => {
    // Kelas dasar untuk item navigasi mobile
    // Kelas 'block py-3 px-4 w-full text-center border-b border-sky-800 last:border-b-0'
    // ini adalah kelas tata letak yang harus selalu ada pada item mobile.
    let classes = "block py-3 px-4 w-full text-center border-b border-sky-800 last:border-b-0 nav-item-mobile-gradient-hover";

    // Periksa jika jalur saat ini cocok dengan jalur tautan
    const isActive = location.pathname === path;

    // Tambahkan kelas aktif jika sedang di halaman tersebut
    if (isActive) {
      // Untuk mobile, kita bisa tambahkan latar belakang dan teks tebal
      // Perhatikan penggunaan 'text-[#067aff]' yang benar (dengan '#')
      classes += " font-bold text-[#067aff] bg-sky-800";
    }

    return classes;
  };

  return (
    <header className="bg-sky-950 p-4 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo atau Nama Situs */}
        <a href="/" className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
          <span className="italic text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#a3e0ff] via-[#6affff] to-[#00ffea] bg-clip-text text-transparent inline-block leading-normal">Firaz</span>Putra
        </a>

        {/* Menu Desktop (sembunyi di mobile/tablet) */}
        <nav className="hidden md:flex space-x-6 text-lg md:text-xl lg:text-2xl">
          <Link to="/" className={getNavLocation('/')}>Home</Link>
          <Link to="/about" className={getNavLocation('/about')}>About</Link>
          {/* <Link to="/certificate" className={getNavLocation('/certificate')}>Certificate</Link>
          <Link to="/project" className={getNavLocation('/project')}>Project</Link>
          <Link to="/contact" className={getNavLocation('/contact')}>Contact</Link> */}
        </nav>

        {/* Tombol Hamburger (hanya tampil di mobile/tablet) */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </nav>

      {/* Menu Navigasi Mobile (muncul/sembunyi berdasarkan state isMenuOpen) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-sky-950 shadow-lg z-20 transform transition-all duration-300 ease-in-out`}>
        <nav className="flex flex-col items-center py-4 text-lg md:text-xl lg:text-2xl">
          <Link to="/" className={getNavLocationMobile('/')}>Home</Link>
          <Link to="/about" className={getNavLocationMobile('/about')}>About</Link>
          {/* <Link to="/certificate" className={getNavLocationMobile('/certificate')}>Certificate</Link>
          <Link to="/project" className={getNavLocationMobile('/project')}>Project</Link>
          <Link to="/contact" className={getNavLocationMobile('/contact')}>Contact</Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;