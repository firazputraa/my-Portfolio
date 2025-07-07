// src/pages/Homepage.jsx
import React from 'react';
import Button from '../components/atoms/Button';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/molecules/ProjectCard';
import CertifCard from "../components/molecules/CertifCard";
import ContainerIcons from '../components/molecules/ContainerIcons';

import ParticleBg from '../components/effects/ParticleBg';
import AnimatedContent from '../components/effects/AnimatedContent';


// Import data proyek dari file JSON
import projectsData from '../data/Projectdata.json';
import CertifData from '../data/CertifData.json';

const Homepage = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <>
      {/* bagian landingpage start */}
      <section className="bg-gradient-to-b from-sky-950 via-sky-900 to-sky-800 text-white min-h-screen flex items-center justify-center p-4 relative overflow-hidden"> {/* Tambahkan relative & overflow-hidden */}
        <ParticleBg /> {/* Tambahkan efek partikel di belakang konten */}
        <AnimatedContent>
            <div className="text-center mx-auto w-full relative z-10"> {/* Tambahkan relative z-10 agar konten di atas blob */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#a3e0ff] via-[#6affff] to-[#00ffea] bg-clip-text text-transparent inline-block leading-normal">
                    IT Enthusiast | FrontEnd Developer
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 max-w-lg drop-shadow-2xl text-center mx-auto">
                    Fond of creating web application designs and bring them to life using code & develop mobile designs
                </p>
                <Button
                    onClick={goToAbout}
                    styles="hover:text-sky-900 hover:border-sky-900 shadow-sm shadow-slate-50"
                >
                    About me
                </Button>
            </div>
        </AnimatedContent>
      </section>
      {/* bagian landingpage end */}

      {/* bagian project start */}
      <section className="bg-sky-800 py-20">
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#a3e0ff] via-[#6affff] to-[#00ffea] bg-clip-text text-transparent inline-block leading-normal">My Projects</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-sky-200 mb-4">
            Here are some of the projects I have completed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {projectsData.map(project => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
              />
            ))}
          </div>
        </div>
      </section>
      {/* bagian project end */}


      {/* bagian certif start */}
      <section className="bg-sky-800 py-20">
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#a3e0ff] via-[#6affff] to-[#00ffea] bg-clip-text text-transparent inline-block leading-normal">My Certifications</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-sky-200 mb-4">
            Here are some of the certifications I have achieved.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {CertifData.map(certif => (
              <CertifCard
                key={certif.id}
                image={certif.image}
                title={certif.title}
                description={certif.description}
              />
            ))}
          </div>
        </div>
      </section>
      {/* bagian certif end */}

      {/* <section className="bg-sky-800 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#a3e0ff] via-[#6affff] to-[#00ffea] bg-clip-text text-transparent inline-block leading-normal">Let's Connect!</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-sky-200 mb-4">
            Feel free to reach out to me on my social media or email.
          </p>
          <ContainerIcons />
        </div>
      </section> */}
    </>
  );
};

export default Homepage;