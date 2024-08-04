import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from "../Components/firebase";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      //navigate("/", { state: { user } });
      toast.success("Logged in Successfully!");
    }catch(error){
      toast.error(error.message);
    }
  }

  return (
  <form onSubmit={handleSubmit}>
    <div className='max-w-screen-2xl px-5 container mx-auto flex items-center justify-center bg-cream md:responsive-login-background min-h-screen'>
          <div className='w-full md:w-2/3 lg:w-1/4 p-5 md:p-10 bg-white/30 rounded-md border border-brown flex flex-col gap-5 items-center justify-center shadow-custom'>
            
            <div className='flex flex-col items-center'>
              <div className='flex flex-col items-center'>
                 <img src= "/images/Logo.png" className='h-8 w-8'></img>
                 <h2 className='font-semibold text-2xl text-dark-green border-b-2 border-dashed border-dark-brown mb-5'>Women Elevate</h2>
              </div>
                <h1 className='font-semibold text-2xl text-dark-brown'>Log in</h1>
            </div>
            
            <div className='flex flex-col gap-5 w-full'>
              <input 
                type='email' placeholder='Enter email' value={email} onChange={(e)=> setEmail(e.target.value)}
                className='py-1 pl-3 border bg-white placeholder:text-sm border-brown rounded-lg focus:outline-none w-full placeholder:text-black/50'
              />
              <input 
                type='password' placeholder='Enter password' value={password} onChange={(e)=> setPassword(e.target.value)}
                className='py-1 pl-3 border bg-white placeholder:text-sm border-brown rounded-lg focus:outline-none w-full placeholder:text-black/50'
              />
            </div>
            
            <button type='submit' className='button shadow-custom rounded-md py-1 px-6 w-full md:w-auto'>Login</button>

            <div className='flex items-center justify-center gap-2'>
                <h3>New user?</h3>
                <Link to="/Signup"> <button className='button shadow-custom rounded-md py-1 px-6 w-full md:w-auto'>Register</button> </Link>
            </div>
    
            <Link to="/" className='hover:underline hover:text-dark-green text-dark-brown'>Back to Home</Link>
          </div>
    </div>
  </form>
  )
}

export default Login
