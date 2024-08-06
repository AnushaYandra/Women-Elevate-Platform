import React, { useState } from 'react'
import { FiMapPin, FiSearch } from "react-icons/fi";

function Banner({query, handleInputChange}) {
 
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14  responsive-background'>
      <div className='flex items-end md:gap-5'>
        <h1 className='text-5xl font-semibold text-dark-brown mb-3'> Elevate Your Career:</h1>
        <p className= 'text-3xl font-semibold text-dark-green mb-3'> Discover Jobs with Purpose</p>
      </div>

      
      <p className='text-sm w-3/4 mb-10 text-black/80 hidden md:block'>The job platform dedicated to empowering women in the workforce. Whether you're seeking a new opportunity, returning to work, or looking to advance your career, we've got you covered. Our mission is to connect you with inclusive employers who value diversity and support your professional growth.</p>

      <form>
        <div className='flex justify-start md:flex-row flex-col md:gap-4 gap-4'>
            <div className='flex rounded-md outline outline-1 outline-brown md:w-1/2 w-full'>
                <input type='text' name='title' id='title' placeholder='What position are you looking for?'
                className='block flex-1 border-0 bg-white py-1 pl-8 text-gray-900 
                placeholder:text-gray-400 focus: right-0 sm:text-sm sm:leading-6 focus:outline-none'
                onChange={handleInputChange} value={query}/>
                <FiSearch className='absolute mt-2.5 ml-2 text-gray-600'/>
            </div>

            <h1 className='button px-8 py-1 md:rounded-md rounded shadow-custom'> Search </h1>

        </div>
      </form>
    </div>
  )
}

export default Banner

