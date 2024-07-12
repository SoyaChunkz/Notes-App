import React, { useState } from 'react';
import ProfileInfo from '../Cards/ProfileInfo';
import { useNavigate } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';
import ToGithub from '../ToGithub/ToGithub';

const Navbar = ({ userInfo, onSearchNote, handleClearSearch, onLoginPage, onSignUpPage }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const backToHomePage = () => {
    navigate('/');
  };

  const onLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearchNote(searchQuery.trim());
    }
  };

  const onClearSearch = () => {
    setSearchQuery('');
    handleClearSearch();
  };

  return (
    <div className={`bg-white dark:bg-neutral-800 px-6 py-2 shadow-md grid grid-cols-1 sm:grid-cols-3 gap-4 items-center h-fit sm:h-24 `}>
      {/*Only renders when LoginPage or SignUpPage*/}
      { 
        (onLoginPage || onSignUpPage) && (

          <>
            {/* HashNotes section */}
            <div className='col-span-1 flex justify-center sm:justify-start'>
              <h2 className="text-2xl font-semibold text-primary py-2">HashNotes</h2>
            </div>

            {/* Centered content for larger screens */}
            <div className="col-span-1 flex justify-center">
              <div className='text-center text-xl dark:text-neutral-300'> 
                {onLoginPage && (
                  <>
                    Welcome to <b className="text-primary dark:text-neutral-100">Login</b> page
                  </>
                )}

                {onSignUpPage && (
                  <>
                    Welcome to <b className="text-primary dark:text-neutral-100">SignUp</b> page
                  </>
                )}
              </div>
            </div>

            {/* Home button on the right for larger screens */}
            <div className='col-span-1 flex items-center justify-center sm:justify-end'>
              <ToGithub />
              <button
                className=" bg-white dark:bg-transparent text-primary dark:text-neutral-200 rounded-md ml-2 text-center sm:mt-0 hover:scale-125 transition-all ease-in-out "
                onClick={backToHomePage}
              >
                Home
              </button>

            </div>
          </>
        )
      }

     
      {/*Only renders after Login or SignUp */}
      {
        (!onLoginPage && !onSignUpPage) && (
          
          <>
            {/* HashNotes section */}
            <div className="col-span-1 sm:col-span-1 flex justify-center sm:justify-start">
              <h2 className="text-2xl font-semibold text-primary py-2">HashNotes</h2>
              <ToGithub />
            </div>

            {/* Searchbar */}
            <div className="col-span-1 flex justify-center">
              <Searchbar
                value={searchQuery}
                onChange={({ target }) => setSearchQuery(target.value)}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
              />
            </div>

            {/* ProfileInfo */}
            <div className="col-span-1 flex justify-center sm:justify-end">
              <ToGithub />
              <ProfileInfo 
              userInfo={userInfo} 
              onLogout={onLogout} 
              />
            </div>
          </>
        )
      }
    </div>
  );
};

export default Navbar;
