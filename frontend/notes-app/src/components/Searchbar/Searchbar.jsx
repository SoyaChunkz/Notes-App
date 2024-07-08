import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

const Searchbar = ({ value, onChange, handleSearch, onClearSearch }) => {

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
    if (e.key === 'Escape') {
      onClearSearch();
    }
  };

  return (
    <div className='w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl flex items-center justify-center px-2 sm:px-4 bg-slate-100 dark:bg-neutral-700 rounded-md border border-transparent dark:border-neutral-600 hover:border-primary dark:hover:border-neutral-100 dark:text-neutral-200 hover:text-primary dark:hover:text-neutral-100 transition-transform transform hover:scale-105'>
      <FaMagnifyingGlass
        className={`text-lg sm:text-xl text-slate-400 dark:text-neutral-400 dark:hover:text-neutral-100 cursor-pointer hover:text-green-500 transition-transform transform hover:scale-110 shrink-0`}
        onClick={handleSearch}
      />
      <input
        type='text'
        placeholder='Search Notes'
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className='w-full text-xs sm:text-sm bg-transparent px-2 sm:px-3 py-[8px] sm:py-[11px] outline-none input-placeholder'
      />

      {
        value && (
          <IoMdClose
            className='text-lg sm:text-xl text-slate-500 dark:text-neutral-400 dark:hover:text-neutral-100 cursor-pointer hover:text-red-500 ml-3 transition-transform transform hover:scale-110'
            onClick={onClearSearch}
          />
        )
      }


    </div>
  );
};

export default Searchbar;
