import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PasswordInput from '../../components/Input/PasswordInput';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [onLoginPage, setOnLoginPage] = useState(true);

    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault()

        if(!validateEmail(email)){
            setError("Please enter a valid Email address.");
            return;
        }
        if(!password){
            setError("Please enter the Password");
            return;
        }

        setError("");


        //Login API Call
         try{
            const response = await axiosInstance.post("/login", {
                email: email,
                password: password
            });

            //Handle successfull login response
            if( response.data && response.data.accessToken ){
                localStorage.setItem("token", response.data.accessToken)
                navigate("/dashboard"); 
            }
         }
         catch( error ){
            //Handle login error
            if( error.response && error.response.data && error.response.data.message ){
                setError(error.response.data.message);
            }
            else{
                setError("An unexpected error occurred. Please try again.")
            }
         }
    };

  return (
    <div className='min-h-screen min-w-screen flex flex-col bg-gray-100 dark:bg-neutral-900'>
        <Navbar onLoginPage={onLoginPage} />

        <div className={`flex items-center justify-center flex-grow select-none `}>
            <div className='w-96 h-fit md:w-[450px] bg-white dark:bg-neutral-800 border dark:border-none rounded-md  dark:border-neutral-400 shadow-md shadow-gray-300 dark:shadow-none px-7 py-10 m-6 '>
                <form onSubmit={ handleLogin }>
                    <h4 className='text-2xl font-semibold mb-7 text-center text-gray-700 dark:text-primary'>Login</h4>
                    <input 
                        type='text' 
                        placeholder='Email' 
                        className='input-box mb-4 w-full ' 
                        value={email} 
                        onChange={ (e) => setEmail(e.target.value) } 
                    />


                    <PasswordInput 
                        value={password} 
                        onChange={ (e) => setPassword(e.target.value) }
                    />

                    {
                        error && <p className='text-red-500 text-xs pb1'>
                            {error}
                        </p>
                    }

                    <button type='submit' className='btn-primary w-full mt-4 border dark:border-none hover:scale-95 transition-all ease-in-out dark:bg-primary dark:hover:bg-blue-600 dark:border-neutral-300 dark:hover:border-primary'>
                        Login
                    </button>
                    <p className='text-sm text-center mt-4 pb-0.5 sm:text-base sm:leading-none sm:whitespace-nowrap sm:overflow-hidden dark:text-neutral-300'> 
                        Not registered yet?{' '}
                        <Link to='/signUp' className='font-medium text-primary underline hover:underline-offset-2'>
                            Create an account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
