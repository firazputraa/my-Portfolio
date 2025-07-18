import React from 'react'

const CertifModal = ({certif, onClose}) =>{
  if(!certif){
    return null;
  }
  return(
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative p-8 bg-white dark:bg-gray-800 w-full max-w-lg m-auto rounded-lg shadow-lg">
        {/* Tombol Tutup */}
        <button
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          onClick={onClose}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Konten Modal */}
        <div className="mt-2 text-center">
          <img 
            src={certif.image} 
            alt={certif.title} 
            className="w-full h-auto object-contain rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {certif.title}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            {certif.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CertifModal;