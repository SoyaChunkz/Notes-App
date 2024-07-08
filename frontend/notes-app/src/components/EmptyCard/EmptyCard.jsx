import React from 'react';

const EmptyCard = ({ imgSrc, message }) => {
  return (
    <>
        <div className='flex flex-col items-center justify-center mt-20 px-4 sm:px-6 lg:px-8'>
            <img src={imgSrc} alt="No notes" className='w-40 sm:w-48 md:w-60 day-mode-svg dark:night-mode-svg' />

            <p className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-xs sm:text-sm md:text-base font-medium text-slate-700 dark:text-neutral-100 text-center leading-7 mt-5'>
                {message}
            </p>
        </div>
    </>
  )
}

export default EmptyCard;
