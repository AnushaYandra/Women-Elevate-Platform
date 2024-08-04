import React, { useState } from 'react'
import { FiMapPin, FiSearch } from "react-icons/fi";

function Banner({query, handleInputChange}) {
 
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 responsive-background'>
      <h1 className='text-4xl font-semibold text-dark-brown mb-3'> Discover your
        <span className='text-dark-green'> dream job </span> today!
      </h1>
      <p className= 'text-md text-black/70 mb-10'>Explore a vast array of job openings in the computer, engineering, and tech industries.</p>

      <form>
        <div className='flex justify-start md:flex-row flex-col md:gap-4 gap-4'>
            <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-brown md:w-1/2 w-full focus:outline-none'>
                <input type='text' name='title' id='title' placeholder='What position are you looking for?'
                className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 
                placeholder:text-gray-600 focus: right-0 sm:text-sm sm:leading-6 focus:outline-none'
                onChange={handleInputChange} value={query}/>
                <FiSearch className='absolute mt-2.5 ml-2 text-gray-600'/>
            </div>


            <button type='submit' className='button px-8 py-1 md:rounded-md rounded shadow-custom'> Search </button>

        </div>
      </form>
    </div>
  )
}

export default Banner
