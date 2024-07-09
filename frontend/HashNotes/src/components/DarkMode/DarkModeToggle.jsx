import React, { useState, useEffect } from 'react';
import SunSVG from '../../assets/images/sun.svg';
import MoonSVG from '../../assets/images/moon.svg';
import { FaMoon, FaSun } from 'react-icons/fa6';
import { MdSunny } from 'react-icons/md';

// const DarkModeToggle = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     // Retrieve the stored dark mode value from localStorage
//     const storedDarkMode = localStorage.getItem('darkMode');
//     return storedDarkMode ? JSON.parse(storedDarkMode) : false;
//   });
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
      return JSON.parse(storedDarkMode);
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Update the document's class and store the value in localStorage
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', JSON.stringify(true));
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', JSON.stringify(false));
    }
  }, [darkMode]);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className="fixed bottom-10 left-10 bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-neutral-300 p-2 rounded-full shadow-xl hover:scale-125 transition-all ease-in-out z-50"
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <MdSunny className=' text-neutral-100 h-9 w-9' />
      ) : (
        // <img src={MoonSVG} alt="Moon Icon" className="h-6 w-6" />
        <FaMoon className=' text-black h-9 w-9' />
      )}
    </button>
  );
};

export default DarkModeToggle;
