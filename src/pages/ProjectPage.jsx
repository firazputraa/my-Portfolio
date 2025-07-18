import ParticleBg from "../components/effects/ParticleBg";
import ProjectCard from "../components/molecules/ProjectCard";

import projectData from '../data/Projectdata.json'

const ProjectPage = () => {
  return (
    <>
      <section className="bg-sky-800 p-10">
        <ParticleBg/>
        <div className="">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#a3e0ff] via-[#6affff] to-[#00ffea] bg-clip-text text-transparent inline-block leading-normal">My Project</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-sky-200 mb-4">These projects were my assignments while I was in college and assignments during training.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectData.map(project => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectPage;