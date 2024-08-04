import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6'

function Newsletter() {
  return (
    <div className='h-auto bg-white rounded-xl p-4 space-y-20'>
       <div className='p-2'>
            <h3 className='text-lg font-bold mb-5 border-b-2 border-dashed border-light-brown flex items-center gap-2 text-dark-brown'>
            <FaRocket />
            Contact Us</h3>

            <p className='text-black/70 text-sm mb-4'> Want to join our team? Email me your resume and let’s chat about job openings that might be a great fit! </p>

            <div className='w-full space-y-4'>
                <button className='w-full py-1 font-medium rounded-md shadow-custom button'>Contact</button>
            </div>
       </div>
       
       <div>
            <h3 className='text-lg font-bold mb-5 flex items-center text-dark-brown border-b-2 border-dashed border-light-brown'>
            <FaEnvelopeOpenText />
            Email me for jobs</h3>
    
            <p className='text-black/70 text-sm mb-4'> Want to join our team? Email me your resume and let’s chat about job openings that might be a great fit! </p>
    
            <div className='w-full space-y-4'>
                <input type='email' name='email' id='email' placeholder='nameg@mail.com' 
                className='w-full block py-1 pl-3 border focus:outline-none text-sm ring-1 ring-inset ring-green rounded'></input>
    
                <input type='submit' value={"Subscribe"} className='w-full block font-medium py-1 pl-3 rounded-md focus:outline-none cursor-pointer shadow-custom button'></input>
            </div>
        </div>
        
       <div className='p-2'>
            <h3 className='text-lg font-bold mb-5 border-b-2 border-dashed border-light-brown flex items-center gap-2 text-dark-brown'>
            <FaRocket />
            Get noticed faster</h3>
    
            <p className='text-black/70 text-sm mb-4'> Want to join our team? Email me your resume and let’s chat about job openings that might be a great fit! </p>
    
            <div className='w-full space-y-4'>
                <input type='submit' value={'Upload your resume'} className='w-full block py-1 pl-3 font-medium rounded-md focus:outline-none cursor-pointer shadow-custom button'></input>
            </div>
       </div>

       <div className='p-2'>
           <h3 className='text-lg font-bold mb-5 border-b-2 border-dashed border-light-brown flex items-center gap-2 text-dark-brown'>
            <FaRocket />
            Tips for preparation</h3>
     
            <p className='text-black/70 text-sm mb-4'> Want to join our team? Email me your resume and let’s chat about job openings that might be a great fit! </p>
     
            <div className='w-full space-y-4'>
                <button className='w-full py-1 font-medium rounded-md shadow-custom button'>Tips?</button>
            </div>
       </div>

       

    </div>
  )
}

export default Newsletter
