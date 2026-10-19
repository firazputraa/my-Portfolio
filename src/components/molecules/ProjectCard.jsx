// src/components/molecules/ProjectCard.jsx
import { useNavigate } from "react-router-dom";
import React from "react";

const ProjectCard = ({ title, description, techStack = [] }) => {
  const navigate = useNavigate();

  const goToProject = () => {
    navigate("/project");
  };

  return (
    <div
      onClick={goToProject}
      className="cursor-pointer flex flex-col justify-between h-full w-full p-6 bg-slate-900/40 backdrop-blur-md border border-sky-800/40 rounded-xl hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all duration-300"
    >
      <div className="flex-grow">
        <svg
          className="w-8 h-8 text-sky-400 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>

        <h3 className="text-xl font-normal tracking-tight text-sky-100 mb-2">
          {title}
        </h3>

        <p className="text-sm text-sky-100 mb-2">{description}</p>
      </div>

      <div className="mt-auto">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-[11px] font-mono text-sky-50 bg-sky-900/30 border border-sky-700/50 rounded-full hover:border-sky-400 hover:shadow-[0_0_50px_rgba(56,189,248,0.15)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
