import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteLogo from '../../assets/images/note-logo.svg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900">
      <div className="bg-white dark:bg-neutral-800 p-10 border rounded-md  dark:border-neutral-400 shadow-md shadow-gray-300 dark:shadow-none text-center flex md:flex-row md:items-center flex-col items-center max-w-5xl m-10">
        <div className="ml-9 mt-6 md:ml-1">
          <img src={NoteLogo} alt="Note Logo" className="w-32 h-32 md:w-64 md:h-64" />
        </div>
        <div className="border-0 md:border-l-2 border-primary dark:border-neutral-400 md:h-64 my-5 md:my-0 md:mx-2"></div>
        <div className="flex flex-col items-center md:mr-10 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-neutral-200 dark:hover:text-primary hover:scale-110 transition-all ease-in-out mb-4">Welcome to HashNotes!</h1>
          <p className="text-gray-700 dark:text-neutral-300 mb-6 line-clamp-5 md:line-clamp-3">
            HashNotes is your personal digital notebook. Capture your thoughts, ideas, and reminders in an organized way. Join us and make your note-taking experience effortless and efficient.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <button
              className="btn-primary m-2 w-32 md:m-2 border hover:scale-110 transition-all ease-in-out dark:bg-neutral-700 dark:border-neutral-300 dark:hover:border-primary dark:hover:bg-primary"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
            <button
              className="btn-primary m-2 w-32 md:m-2 border hover:scale-110 transition-all ease-in-out dark:bg-neutral-700 dark:border-neutral-300 dark:hover:border-primary dark:hover:bg-primary"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
