import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

import Button from "../components/atoms/Button";
import ProjectCard from "../components/molecules/ProjectCard";
import CertifCard from "../components/molecules/CertifCard";
import ContainerIcons from "../components/molecules/ContainerIcons";
import FormContact from "../components/organism/FormContact";

import ParticleBg from "../components/effects/ParticleBg";
import AnimatedContent from "../components/effects/AnimatedContent";

// Import data proyek dari file JSON
import projectsData from "../data/Projectdata.json";
import CertifData from "../data/CertifData.json";

const Homepage = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  const scrollRef = useRef(null);

useEffect(() => {
  const el = scrollRef.current;
  if (el) {
    const onWheel = (e) => {
      e.preventDefault();
      el.scrollBy({
        left: e.deltaY * 2, 
        behavior: "smooth", 
      });
    };

    el.addEventListener("wheel", onWheel, {
      passive: false,
    });

    return () => el.removeEventListener("wheel", onWheel);
  }
}, []);

  return (
    <>
      {/* bagian landingpage start */}
      <section className="bg-gradient-to-b from-sky-950 via-sky-900 to-sky-800 text-white min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        <ParticleBg />
        <AnimatedContent>
          <div className="text-center mx-auto w-full relative z-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium bg-gradient-to-r from-[#a3e0ff] via-[#36e0e0] to-[#00fff7] bg-clip-text text-transparent inline-block leading-normal lg:max-w-2xl md:max-w-xl max-w-lg">
              IT Support | Fullstack Developer
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 lg:max-w-2xl md:max-w-xl max-w-lg drop-shadow-2xl text-center mx-auto ">
              Building scalable full-stack web applications and ensuring robust
              IT infrastructure operations
            </p>
            <Button
              onClick={goToAbout}
              styles="hover:text-sky-900 hover:border-sky-900 shadow-sm shadow-slate-50 font-medium"
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal bg-gradient-to-r from-[#a3e0ff] via-[#6affff] to-[#00ffea] bg-clip-text text-transparent inline-block leading-normal">
            My Projects
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-sky-200 mb-4">
            Here are some of the projects I have completed
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                techStack={project.techStack
                  .split(",")
                  .map((tech) => tech.trim())}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </section>
      {/* bagian project end */}

      {/* bagian certif start */}
      <section className="bg-sky-800 py-20">
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal bg-gradient-to-r from-[#a3e0ff] via-[#6affff] to-[#00ffea] bg-clip-text text-transparent inline-block leading-normal">
            My Certifications
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-sky-200 ">
            Here are some of the certifications I have achieved
          </p>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-6 pt-4 scrollbar-hide"
          >
            {CertifData.map((certif) => (
              <CertifCard
                key={certif.id}
                image={certif.image}
                title={certif.title}
              />
            ))}
          </div>
        </div>
      </section>
      {/* bagian certif end */}

      <section className="bg-sky-800 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal bg-gradient-to-r from-[#a3e0ff] via-[#6affff] to-[#00ffea] bg-clip-text text-transparent inline-block leading-normal">
            Let's Connect!
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-sky-200 mb-4">
            Feel free to reach out to me on my social media or email.
          </p>
          <ContainerIcons />
          <FormContact />
        </div>
      </section>
    </>
  );
};

export default Homepage;
