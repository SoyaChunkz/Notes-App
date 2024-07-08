import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const PasswordInput = ({ value, onChange, placeholder }) => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const togglePassword = () => {
        setIsShowPassword(!isShowPassword);
    }

    return (
        <div className='w-full text-sm bg-transparent dark:bg-neutral-700 border-[1.5px] dark:border-none px-5 py-0.5 rounded mb-4 outline-none flex items-center dark:text-neutral-200 '>
            <input
                value={value}
                onChange={onChange}
                type={isShowPassword ? 'text' : 'password'}
                placeholder={placeholder || 'Password'}
                className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none dark:placeholder:text-neutral-300 dark:text-neutral-100'
            />

            {
                isShowPassword ? <FaRegEye
                    size={22}
                    className='text-primary cursor-pointer'
                    onClick={() => togglePassword()}
                    /> : <FaRegEyeSlash
                            size={22}
                            className='text-slate-400 dark:text-neutral-500 dark:hover:text-neutral-100 cursor-pointer hover:scale-105 transition-all ease-in-out hover:text-primary'
                            onClick={() => togglePassword()}
                         />
            }
        </div>
    )
}

export default PasswordInput