// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavLocation = (path) => {
    // Penjelasan animasi:
    // relative               : Agar elemen ::after (garis bawah) bisa diposisikan tepat di bawah teks ini
    // after:content-['']     : Membuat pseudo-element
    // after:absolute         : Posisi absolut relatif terhadap teks link
    // after:-bottom-1        : Jarak garis dengan teks (bisa diubah sesuai selera)
    // after:left-1/2         : Memulai elemen tepat di tengah (50% dari kiri)
    // after:-translate-x-1/2 : Menggeser elemen ke kiri sebanyak setengah dari lebarnya agar benar-benar di tengah
    // after:h-[3px]          : Ketebalan garis (sesuai border-b-3 Anda sebelumnya)
    // after:w-0              : Lebar awal garis adalah 0
    // after:bg-[#067aff]     : Warna garis
    // after:transition-all   : Memberikan efek transisi halus
    // hover:after:w-full     : Saat di-hover, lebar garis menjadi 100% (menyebar ke samping)

    let classes =
      "nav-item-gradient-hover relative transition-colors duration-300 " +
      "after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 " +
      "after:h-[1px] after:w-0 after:bg-[#067aff] after:transition-all after:duration-300 hover:after:w-full";

    const isActive = location.pathname === path;
    if (isActive) {
      classes += " font-light text-[#067aff] after:w-full";
    }

    return classes;
  };

const getNavLocationMobile = (path) => {

  let classes =
    "block py-3 px-4 w-full text-center border-b border-sky-800 last:border-b-0 text-white hover:text-[#067aff] transition-colors duration-300";

  const isActive = location.pathname === path;

  if (isActive) {
    classes += " font-extrabold text-[#067aff]";
  }

  return classes;
};

  return (
    <header className="bg-sky-950 p-4 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo atau Nama Situs */}
        <a
          href="/"
          className="text-white text-lg md:text-xl lg:text-2xl font-normal"
        >
          <span className="italic text-lg md:text-xl lg:text-2xl font-normal bg-gradient-to-r from-[#a3e0ff] via-[#6affff] to-[#00ffea] bg-clip-text text-transparent inline-block leading-normal">
            Firaz
          </span>
          Putra
        </a>

        {/* Menu Desktop (sembunyi di mobile/tablet) */}
        <nav className="hidden md:flex space-x-6 text-base md:text-lg lg:text-xl font-extralight">
          <Link to="/" className={getNavLocation("/")}>
            Home
          </Link>
          <Link to="/about" className={getNavLocation("/about")}>
            About
          </Link>
          {/* <Link to="/project" className={getNavLocation('/project')}>Project</Link>
          <Link to="/contact" className={getNavLocation('/contact')}>Contact</Link> */}
        </nav>

        {/* Tombol Hamburger (hanya tampil di mobile/tablet) */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </nav>

      {/* Menu Navigasi Mobile (muncul/sembunyi berdasarkan state isMenuOpen) */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-full left-0 w-full bg-sky-950 shadow-lg z-20 transform transition-all duration-300 ease-in-out`}
      >
        <nav className="flex flex-col items-center py-4 text-base md:text-lg lg:text-xl font-extralight">
          <Link to="/" className={getNavLocationMobile("/")}>
            Home
          </Link>
          <Link to="/about" className={getNavLocationMobile("/about")}>
            About
          </Link>
          {/* <Link to="/certificate" className={getNavLocationMobile('/certificate')}>Certificate</Link>
          <Link to="/project" className={getNavLocationMobile('/project')}>Project</Link>
          <Link to="/contact" className={getNavLocationMobile('/contact')}>Contact</Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
