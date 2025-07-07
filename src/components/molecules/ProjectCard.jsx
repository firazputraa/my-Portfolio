// src/components/molecules/ProjectCard.jsx
import { Link } from 'react-router-dom';
import React from 'react';

const ProjectCard = ({ image, title}) => {
  return (
    <Link to={"/detail"} className='hover:scale-105 transition-transform duration-300 ease-in-out'>
      {/* Perubahan di sini: bg-white/90 atau bg-blue-50/80, dan text-sky-900 untuk judul */}
      <div className="max-w-sm border rounded-lg border-sky-50 shadow-2xl h-full bg-sky-100/20 backdrop-blur-xs">
        <div className="p-1">
            {/* Pastikan gambar memiliki rasio aspek yang baik atau tinggi tetap */}
            <img className="rounded-t-lg w-full h-48 object-cover block" src={image} alt={title} /> {/* Tambahkan h-48 object-cover */}
            <h4 className="text-base md:text-lg lg:text-xl font-bold tracking-tight text-sky-100 text-center mt-2 p-2"> {/* Tambahkan text-center dan p-2 */}
              {title}
            </h4>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;