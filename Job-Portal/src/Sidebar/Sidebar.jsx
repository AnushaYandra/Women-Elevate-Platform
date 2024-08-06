import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPosting from './JobPosting'
import WorkExp from './WorkExp'
import EmploymentType from './EmploymentType'

function Sidebar({handleChange, handleClick, resetFilters}) {
  return (
    <div className='space-y-5 h-auto bg-white p-4 rounded-xl'>
        <h3 className='text-lg font-bold mb-2 text-dark-brown border-b-2 border-dashed border-light-brown text-center'>Filters</h3>

        <button onClick={resetFilters} className='button shadow-custom px-6 py-1 rounded-md'> Reset Filters</button>

        <Location  handleChange={handleChange}/>

        <Salary handleChange={handleChange} handleClick={handleClick}/>

        <JobPosting handleChange={handleChange}/>

        <WorkExp handleChange={handleChange}/>

        <EmploymentType handleChange={handleChange}/>

    </div>
  )
}

export default Sidebar
