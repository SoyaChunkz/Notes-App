import React from 'react';
import { FaGithub } from 'react-icons/fa6';

const ToGithub = () => {
  const handleGitHubRedirect = () => {
    window.open('https://github.com/SoyaChunkz/Notes-App.git', '_blank');
  };

  return (
    <button
      className=" bg-gray-100 dark:bg-neutral-700 p-1.5 mr-2 rounded-full shadow-xl hover:scale-125 transition-all ease-in-out"
      onClick={handleGitHubRedirect}
      aria-label="GitHub Repository"
    >
      <FaGithub
        className='text-black dark:text-white'
        size={28}
      />
    </button>
  );
};

export default ToGithub;
