// src/components/effects/ParticleBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loadSlim is a smaller version of tsparticles

const ParticleBg = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // You can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add any plugin via the loadPlugins method this way, and it's highly recommended as a clean way to load all your plugins
    await loadSlim(engine); // Use loadFull if you need more features
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  const options = {
    // Ini adalah konfigurasi partikel Anda. Sesuaikan agar cocok dengan desain dan keinginan Anda.
    // Saya akan berikan konfigurasi yang cocok dengan tema gelap dan biru.
    background: {
      color: {
        value: "transparent", // Latar belakang partikel transparan agar gradien section tetap terlihat
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false, // Matikan efek klik jika tidak diinginkan
          mode: "push",
        },
        onHover: {
          enable: true, // Aktifkan efek hover
          mode: "repulse", // Partikel menjauh saat kursor mendekat
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 150, // Jarak repulse saat hover
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#ffffff", "#91C8E4", "#00CAFF", "#067aff"], // Warna partikel: putih, biru terang dari gradien teks
      },
      links: {
        color: "#067aff", // Warna garis antar partikel
        distance: 200, // Jarak maksimum garis
        enable: true,
        opacity: 1,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1, // Kecepatan gerakan partikel
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60, // Jumlah partikel
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: "circle", // Bentuk partikel (bisa "star", "triangle", "polygon", dll.)
      },
      size: {
        value: { min: 1, max: 3 }, // Ukuran partikel bervariasi
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="absolute inset-0 z-0" // Menjaga partikel di belakang konten lain
    />
  );
};

export default ParticleBg;