const LinkedinIcon = ({ className = 'w-6 h-6', fill = 'currentColor' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={className}
      fill={fill}
      aria-hidden="true"
    >
      {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
      <path d="M416 32H32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM135.2 416H79.6V216h55.6v200zM107.4 176c-18.4 0-33.4-15-33.4-33.4s15-33.4 33.4-33.4 33.4 15 33.4 33.4-15 33.4-33.4 33.4zm281.3 240h-55.6V300c0-24.6-.3-56.3-34.4-56.3-34.4 0-39.8 26.9-39.8 54.7V416h-55.6V216h53.5v24.6h.7c7.4-14.1 25.3-28.9 52.6-28.9 56.4 0 66.8 37 66.8 84.8V416z"/>
    </svg>
  );
};

export default LinkedinIcon;