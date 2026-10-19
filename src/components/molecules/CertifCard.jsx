const CertifCard = ({ image, title, description }) => {
  return (
    // PERUBAHAN 1: Tambahkan bg-slate-200 agar sisa ruang kosong tersamarkan
    <div className="relative h-80 flex-shrink-0 w-[85vw] md:w-[22rem] flex flex-col justify-end bg-sky-950 border  rounded-xl overflow-hidden hover:-translate-y-2 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all duration-300 snap-center md:snap-align-none cursor-pointer group">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10 transition-opacity duration-300 group-hover:via-slate-900/60" />

      <div className="relative z-20 p-6 flex flex-col">
        <h4 className="text-lg md:text-xl font-bold tracking-tight text-sky-200 mb-2 drop-shadow-md">
          {title}
        </h4>
        <p className="text-sm text-sky-100/90 line-clamp-3 drop-shadow-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CertifCard;
