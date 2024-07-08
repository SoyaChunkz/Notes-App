import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = ({ userInfo, onLogout }) => {

    

  return (
    <div className='flex flex-col sm:flex-row items-center gap-3 w-full sm:w-fit'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full text-white font-medium bg-blue-500'>
            {getInitials(userInfo?.fullName)}
        </div>

        <div className='text-center sm:text-left'>
            <p className='text-sm font-medium dark:text-neutral-100'>{userInfo?.fullName}</p>
            <button className='text-sm text-slate-700 dark:text-neutral-100 underline hover:text-primary dark:hover:text-blue-200' onClick={onLogout}>
                Logout
            </button>
        </div>
    </div>
  )
}

export default ProfileInfo