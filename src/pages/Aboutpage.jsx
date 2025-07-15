import foto_profile from '../../public/profile1.png';
import ParticleBg from '../components/effects/ParticleBg';
import ContainerIcons from '../components/molecules/ContainerIcons';
const AboutSection = () => {
  return (
    <>
    <section className='bg-gradient-to-b from-sky-950 via-sky-900 to-sky-800 text-white flex items-center justify-center pt-16 relative overflow-hidden'>
      <ParticleBg />
      <div className='flex flex-col md:flex-row  max-w-6xl relative z-10 justify-between'>
        <div className='text-center mb-6 md:pt-20'>          
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold'>Muhammad Firaz <br/> Putra Sri Ardhya</h1>
          <h2 className='text-xl md:text-2xl lg:text-3xl'>IT Enthusiast <span className='bg-gradient-to-r from-[#a3e0ff] via-[#6affff] to-[#00ffea] bg-clip-text text-transparent inline-block leading-normal'>| FullStack Developer</span></h2>
          <h5 className='text-lg md:text-xl lg:text-2xl mb-4'>Lets connect with me</h5>
          <ContainerIcons/>
        </div>
        <div className='border-sky-200 bg-white/20 border-2 rounded-full w-[300px] h-[400px] overflow-hidden shadow-xl md:ml-8 mb-4 md:mb-0 hover:scale-105 transition-transform duration-300 ease-in-out'>
            <img 
              src={foto_profile} 
              alt=""
              className='w-full h-full object-cover'
              />
        </div>
      </div>
    </section>

    <section className='bg-sky-800 p-10'>
      <div className='max-w-6xl mx-auto px-4 relative bg-white/10 rounded-lg p-8 border border-sky-200 shadow-lg'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#a3e0ff] via-[#6affff] to-[#00ffea] bg-clip-text text-transparent inline-block leading-normal'>About me</h2>
        <p className='text-lg md:text-xl lg:text-2xl text-justify text-white'>Graduate of Vocational High School majoring in Computer Network Engineering and currently pursuing higher education at Indraprasta PGRI University. Have a strong interest in pursuing a career in the field of science and technology, as well as have strong ambition and a willingness to learn new things.</p>
      </div>
    </section>

    <section className='bg-sky-800 p-10'>
      <div className=''>
        <div className='max-w-6xl mx-auto px-4 relative bg-white/10 rounded-lg p-8 border border-sky-200 shadow-lg'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#a3e0ff] via-[#6affff] to-[#00ffea] bg-clip-text text-transparent inline-block leading-normal'>Training experience: </h2>
            <ul className='list-disc ml-10'>
              <li className='font-bold text-white text-xl md:text-2xl lg:text-3xl'>Training CyberSecurity (maret 2021 - september 2021)</li>
              <p className='text-white text-lg md:text-xl lg:text-2xl md:text-justify'>Learn the basic commands of Linux operating systems;Studying vulnerabilities and security in computer networks</p>

              <br />

              <li className='font-bold text-white text-xl md:text-2xl lg:text-3xl'>Training IT Support (Mei 2022 - Juli 2022)</li>
              <p className='text-white text-lg md:text-xl lg:text-2xl md:text-justify'>Learning hardware and software on a computer or laptop; Getting to know various operating systems; Learning security on computer networks</p>
              <br />

              <li className='font-bold text-white text-xl md:text-2xl lg:text-3xl'>Training DevOps Cloud Server (Juni 2022 - Juli 2022)</li>
              <p className='text-white text-lg md:text-xl lg:text-2xl md:text-justify'>Cisco configuration vlan, Trunk, NAT;Instalation jointing,Cable testing,Power meter;Webserver,FTP server,DNS server;Docker,SSH,GIT;Aws Web Services</p>
              <br />

              <li className='font-bold text-white text-xl md:text-2xl lg:text-3xl'>Coding Camp 2025 Powered By DBS FOUNDATION (Februari 2025 - Juni 2025)</li>
              <p className='text-white text-lg md:text-xl lg:text-2xl md:text-justify'>Learn Git basics with Github; Learn web programming basics, from beginner to intermediate; Learn Javascript programming basics to backend learning; Learn financial literacy</p>
            </ul>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutSection;