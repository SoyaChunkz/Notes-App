import React from 'react';
import { FaGithub } from 'react-icons/fa6';

const ToGithub = ({ darkMode }) => {
  const handleGitHubRedirect = () => {
    window.open('https://github.com/SoyaChunkz/Notes-App.git', '_blank');
  };

  return (
    <button
      className="fixed bottom-28 left-10 bg-gray-100 dark:bg-neutral-700 p-2 rounded-full shadow-xl hover:scale-125 transition-all ease-in-out"
      onClick={handleGitHubRedirect}
      aria-label="GitHub Repository"
    >
      {darkMode ? (
        <FaGithub className={'text-white'} size={36} />
      ) : (
        <FaGithub className={'text-black'} size={36} />
      )}
      {/* <FaGithub className={darkMode ? 'text-white' : 'text-black'} size={36} /> */}
    </button>
  );
};

export default ToGithub;
