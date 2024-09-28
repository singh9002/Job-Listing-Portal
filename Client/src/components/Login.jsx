import React, { useState } from 'react'
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {getAuth} from "firebase/auth";
import app from '../firebase/firebase.config';

const Login = ({ onLogin }) => {

    const auth=getAuth();
    const googleProvider=new GoogleAuthProvider();
    const handleLogin=()=>{
       signInWithPopup(auth, googleProvider).then((result)=>{

        const user=result.user;
        console.log(user);
        

       }).catch((error)=>{
        const errorMessage=error.message;
        const email=error.customData.email;

        const credential=GoogleAuthProvider.credentialFromError(error);
       });
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your login logic here, e.g., authentication API call
      onLogin({ email, password });
    };

// const Login = () => {
//     const auth=getAuth();
//     const googleProvider=new GoogleAuthProvider();
//     const handleLogin=()=>{
//        signInWithPopup(auth, googleProvider).then((result)=>{

//         const user=result.user;
//         console.log(user);
        

//        }).catch((error)=>{
//         const errorMessage=error.message;
//         const email=error.customData.email;

//         const credential=GoogleAuthProvider.credentialFromError(error);
//        });
//     }
  return (
        // <div className='h-screen w-full flex items-center justify-center'>
        // <button className='bg-blue px-8 py-2 text-white' onClick={handleLogin}>Login with Google</button>
        // </div>

        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

             {/* <div className='h-screen w-full flex items-center justify-center'> */}
         <button className='bg-black px-8 py-2 text-white' onClick={handleLogin}>Login with Google</button>
        {/* </div> */}
  
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default Login;


