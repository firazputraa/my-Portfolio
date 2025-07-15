import React from 'react';

const Button = (props) => {
    const { children, styles, onClick } = props;

    return (
        <button
            className={`
                relative
                py-3 px-6 rounded-lg text-base md:text-lg lg:text-xl
                text-sky-50 font-bold
                border border-sky-50
                overflow-hidden
                group cursor-pointer
                transition-all duration-300 ease-in-out
                ${styles || ''}
            `}
            onClick={onClick}
        >
            {/* Teks button harus di atas lapisan gradient */}
            <span className="relative z-10">{children}</span>

            {/* Lapisan gradient untuk efek hover */}
            <div
                className="
                    absolute inset-0
                    bg-gradient-to-r from-[#91C8E4] via-[#00CAFF] to-[#067aff] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out
                "
            ></div>
        </button>
    );
};

export default Button;