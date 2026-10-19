import foto_profile from "../../public/profile2.png";
import ParticleBg from "../components/effects/ParticleBg.jsx";
import ContainerIcons from "../components/molecules/ContainerIcons.jsx";

const Aboutpage = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-950 via-sky-900 to-sky-800 text-white flex items-center justify-center pt-10 pb-10 md:pt-16 md:pb-12 relative overflow-hidden">
        <ParticleBg />
        <div className="flex flex-col-reverse md:flex-row max-w-5xl w-full px-4 md:px-5 relative z-10 justify-around items-center gap-4 md:gap-6">
          {/* Kolom Teks (Kiri di desktop, Bawah di mobile) */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-2 leading-tight">
              Muhammad Firaz <br className="hidden sm:inline" /> Putra Sri
              Ardhya
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 md:mb-6">
              IT Support{" "}
              <span className="bg-gradient-to-r from-[#a3e0ff] via-[#6affff] to-[#00ffea] bg-clip-text text-transparent inline-block leading-normal">
                | FullStack Developer
              </span>
            </h2>

            <div className="px-4 sm:px-0">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-sky-100 leading-relaxed max-w-xl mx-auto md:mx-0 text-justify md:text-left">
                Graduate Bachelor of Informatics Engineering from Universitas
                Indraprasta PGRI with a specialized focus as a Full Stack Web
                Developer. Experienced in building web applications based on
                React, Express.js, Flask, and PostgreSQL, as well as integrating
                microservices architecture and Python-based Machine Learning
                models. Familiar with managing deployment and version control
                using Git, Docker, and AWS, ready to provide optimal and
                solution-oriented technical contributions throughout the product
                development cycle.
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Foto & Icons dengan Pengaturan Urutan (Order) */}
          <div className="flex flex-col items-center">
            <div className="order-2 text-center mb-2 md:mb-0 md:mt-4">
              <h5 className="text-sm md:text-base lg:text-lg font-medium text-sky-200 mb-2 mt-4">
                Let's connect with me
              </h5>
              <ContainerIcons />
            </div>
            <div className="order-1 flex-shrink-0 border-sky-200 bg-white/20 border-2 rounded-full w-[220px] h-[300px] sm:w-[260px] sm:h-[350px] md:w-[320px] md:h-[420px] overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src={foto_profile}
                alt="Muhammad Firaz Putra Sri Ardhya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* section Working Experience */}
      <section className="bg-sky-800 py-6 px-4 md:p-10">
        
      </section>

      {/* Section Training Experience */}
      <section className="bg-sky-800 py-6 px-4 md:p-10">
        <div className="max-w-6xl mx-auto p-5 md:p-8 rounded-lg border border-sky-200/50 bg-sky-900/30 backdrop-blur-sm shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal bg-gradient-to-r from-[#a3e0ff] via-[#6affff] to-[#00ffea] bg-clip-text text-transparent inline-block leading-normal mb-4">
            Training experience:
          </h2>
          <ul className="list-disc pl-4 sm:pl-6 space-y-4">
            <li>
              <h3 className="font-semibold text-white text-base sm:text-lg md:text-xl lg:text-2xl">
                Training CyberSecurity (Maret 2021 - September 2021)
              </h3>
              <p className="text-sky-100 text-xs sm:text-sm md:text-base mt-1">
                Learn the basic commands of Linux operating systems; Studying
                vulnerabilities and security in computer networks.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-white text-base sm:text-lg md:text-xl lg:text-2xl">
                Training IT Support (Mei 2022 - Juli 2022)
              </h3>
              <p className="text-sky-100 text-xs sm:text-sm md:text-base mt-1">
                Learning hardware and software on a computer or laptop; Getting
                to know various operating systems; Learning security on computer
                networks.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-white text-base sm:text-lg md:text-xl lg:text-2xl">
                Training DevOps Cloud Server (Juni 2022 - Juli 2022)
              </h3>
              <p className="text-sky-100 text-xs sm:text-sm md:text-base mt-1">
                Cisco configuration VLAN, Trunk, NAT; Installation jointing,
                Cable testing, Power meter; Webserver, FTP server, DNS server;
                Docker, SSH, GIT; AWS Web Services.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-white text-base sm:text-lg md:text-xl lg:text-2xl">
                Coding Camp 2025 Powered By DBS FOUNDATION (Februari 2025 - Juni
                2025)
              </h3>
              <p className="text-sky-100 text-xs sm:text-sm md:text-base mt-1">
                Learn Git basics with GitHub; Learn web programming basics, from
                beginner to intermediate; Learn JavaScript programming basics to
                backend learning; Learn financial literacy.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Aboutpage;