import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PasswordInput from '../../components/Input/PasswordInput';
import { validateEmail } from '../../utils/helper';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [onSignUpPage, setOnSignUpPage] = useState(true);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid Email address.");
      return;
    }
    if (!password) {
      setError("Please enter the Password");
      return;
    }

    setError("");

    // SignUp API call
    try {
      const response = await axiosInstance.post("create-account", {
        fullName: name,
        email: email,
        password: password
      });

      // Handle successful user creation response
      if (response.data && response.data.error) {
        setError(response.data.message);
        return;
      }

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      // Handle user creation error
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className='min-h-screen min-w-screen flex flex-col bg-gray-100 dark:bg-neutral-900'>
      <Navbar onSignUpPage={onSignUpPage} />

      <div className={`flex items-center justify-center select-none `}>
        <div className="w-96 md:w-[450px] bg-white dark:bg-neutral-800 border rounded-md  dark:border-none shadow-md shadow-gray-300 dark:shadow-none px-7 py-10 mx-5 md:mx-0">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl font-semibold  mb-7 text-center text-gray-700 dark:text-primary">Sign Up</h4>

            <input
              type="text"
              placeholder="Name"
              className="input-box mb-4 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="input-box mb-4 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p className="text-red-500 text-xs text-center mt-2">
                {error}
              </p>
            )}

            <button type="submit" className="btn-primary w-full mt-4 border dark:border-none hover:scale-95 transition-all ease-in-out dark:bg-primary dark:hover:bg-blue-600 dark:border-neutral-300 dark:hover:border-primary ">
              Create account
            </button>

            <p className="text-sm text-center mt-4 pb-0.5 sm:text-base sm:leading-none sm:whitespace-nowrap sm:overflow-hidden dark:text-neutral-300">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-primary underline hover:underline-offset-2">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
