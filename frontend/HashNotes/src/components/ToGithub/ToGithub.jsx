import React from 'react';
import { FaGithub } from 'react-icons/fa6';

const ToGithub = ({ darkMode }) => {
  const handleGitHubRedirect = () => {
    window.open('https://github.com/SoyaChunkz/Notes-App.git', '_blank');
  };

  return (
    <button
      className="fixed bottom-28 left-10 bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-neutral-300 p-2 rounded-full shadow-xl hover:scale-125 transition-all ease-in-out z-50"
      onClick={handleGitHubRedirect}
      aria-label="GitHub Repository"
    >
      <FaGithub className={darkMode ? 'text-white' : 'text-black'} size={36} />
    </button>
  );
};

export default ToGithub;
