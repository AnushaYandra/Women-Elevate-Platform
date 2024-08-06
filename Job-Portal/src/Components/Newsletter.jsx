import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6'

function Newsletter() {
  return (
    <div className='h-auto bg-white rounded-xl p-4 space-y-14'>
       <div className='p-2'>
            <h3 className='text-lg font-bold mb-5 border-b-2 border-dashed border-light-brown flex items-center gap-2 text-dark-brown'>
            <FaRocket />
            Career Guidance </h3>

            <p className='text-black/70 text-sm mb-4'>Discover the tools and insights you need to navigate your career with confidence and clarity. From personalized advice to skill-building resources, we’re here to support your professional journey.</p>

            <div className='w-full space-y-4'>
                <button className='w-full py-1 font-medium rounded-md shadow-custom button'>Contact</button>
            </div>
       </div>

       <div className='p-2'>
           <h3 className='text-lg font-bold mb-5 border-b-2 border-dashed border-light-brown flex items-center gap-2 text-dark-brown'>
            <FaRocket />
            Success Stories</h3>
     
            <p className='text-black/70 text-sm mb-4'> Read how women like you have transformed their careers through our platform. Our success stories highlight the journeys of those who have navigated challenges, seized opportunities, and achieved their professional goals. </p>
     
            <div className='w-full space-y-4'>
                <button className='w-full py-1 font-medium rounded-md shadow-custom button'>Read</button>
            </div>
       </div>
       
       <div>
            <h3 className='text-lg font-bold mb-5 flex items-center text-dark-brown border-b-2 border-dashed border-light-brown'>
            <FaEnvelopeOpenText />
            Training programs</h3>
    
            <p className='text-black/70 text-sm mb-4'> Unlock your potential with our training programs designed to enhance your skills and boost your career. Explore a variety of courses and workshops tailored to industry demands and personal growth. </p>
    
            <div className='w-full space-y-4'>
                <button className='w-full py-1 font-medium rounded-md shadow-custom button'>Subscribe</button>
            </div>
        </div>
        
       <div className='p-2'>
            <h3 className='text-lg font-bold mb-5 border-b-2 border-dashed border-light-brown flex items-center gap-2 text-dark-brown'>
            <FaRocket />
           Webinars & Workshops</h3>
    
            <p className='text-black/70 text-sm mb-4'>Join our interactive webinars and workshops to gain insights from industry experts and network with like-minded professionals. </p>
    
            <div className='w-full space-y-4'>
                <button className='w-full py-1 font-medium rounded-md shadow-custom button'>Join</button>
            </div>
       </div>

    </div>
  )
}

export default Newsletter
