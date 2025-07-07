const XIcon = ({ className = 'w-6 h-6', fill = 'currentColor' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      fill={fill}
      aria-hidden="true" // Penting untuk aksesibilitas
    >
      {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H36L200.7 275.5 26.8 48H172.5L279.1 185.6 389.2 48zM364.4 421.8h39.2L124.6 94.4H83.3L364.4 421.8z"/>
    </svg>
  );
};

export default XIcon;