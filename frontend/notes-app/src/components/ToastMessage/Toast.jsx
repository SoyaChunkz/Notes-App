import React, { useEffect } from 'react';
import { LuCheck } from 'react-icons/lu';
import { MdDeleteOutline } from 'react-icons/md';

const Toast = ( { isShown, message, type, onClose} ) => {
  

    useEffect(() => {
      const timeOutId = setTimeout( () => {
        onClose();
      }, 3500);
    
      return () => {
        clearTimeout(timeOutId);
      }
    }, [onClose])
    
    return (
    <>
        <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 md:top-28 md:right-6 md:left-auto md:transform-none transition-all duration-400 ${ isShown ? "opacity-100" : "opacity-0" }`}>
            <div className={`min-w-52 bg-white dark:bg-neutral-700 border dark:border-none shadow-2xl rounded-md after:w-[5px] after:h-full ${ type === "delete" ? "after:bg-red-500" : "after:bg-green-500" } after:absolute after:left-0 after:top-0 after:rounded-l-lg`}>
                <div className='flex items-center gap-2 sm:gap-3 py-2 px-4'>
                    <div className={`w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center rounded-full ${ type === "delete" ? "bg-red-50" : "bg-green-50" }`}> 
                        {
                            type === "delete" ? 
                            ( <MdDeleteOutline className='text-xl text-red-500' /> ) :
                            ( <LuCheck className='text-xl text-green-500' /> )
                        } 
                    </div>

                    <p className='text-sm text-left text-slate-800 dark:text-neutral-100'>
                        {message}
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Toast