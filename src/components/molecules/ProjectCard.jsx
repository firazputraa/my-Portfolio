// src/components/molecules/ProjectCard.jsx
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const ProjectCard = ({ image, title}) => {
  const navigate = useNavigate();
  const goToProject = () => {
    navigate('/project');
  };

  return (
    <div className='hover:scale-105 transition-transform duration-300 ease-in-out'>
      <div className="max-w-sm border rounded-lg border-sky-50 shadow-2xl h-full bg-sky-100/20 backdrop-blur-xs flex flex-col justify-between">
        <div className="p-2">
          <img className="rounded-t-lg w-full h-48 object-cover block" src={image} alt={title} />
          <h4 className="text-base md:text-lg lg:text-xl font-bold tracking-tight text-sky-100 text-center mt-2 p-2"> 
            {title}
          </h4>
        </div>
        <div className="p-4 flex justify-center"> 
          <button
            onClick={goToProject}
            className='hover:bg-sky-900 shadow-sm shadow-slate-50 text-sky-100 p-2 w-full rounded-xl'
          >
            Detail Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;