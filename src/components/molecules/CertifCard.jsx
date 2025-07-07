import { Link } from "react-router-dom";
import React from 'react'; 
const CertifCard = ({ image, title, description }) => {
  return (
    <div className="max-w-sm border-2 rounded-lg border-sky-200 shadow-2xl h-full bg-white/20 backdrop-blur-xs flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out "> 
      <a href="" className="flex-shrink-0"> 
        <img src={image} alt={title} className="rounded-lg p-4 w-full h-auto object-contain"/>
      </a>
      <div className="p-5 flex flex-col flex-grow"> 
        <h4 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-sky-100">
            {title}
        </h4>
        <p className="mb-4 text-sky-200 text-base md:text-lg lg:text-xl">{description}</p> 
        <Link to="/" className="inline-flex items-center px-3 py-2 text-lg font-medium text-center justify-center text-sky-200 bg-sky-700 rounded-lg mt-auto hover:bg-sky-800 border-2 border-sky-200">
            Detail...
        </Link>
      </div>
    </div>
  )
}

export default CertifCard;