import React from 'react'
import { FiDollarSign } from 'react-icons/fi'
import Button from './Button'
import Input from '../Components/Input'

function Salary({handleChange, handleClick}) {
  return (
    <div >
       <h4 className='text-lg mb-2 text-dark-green font-bold flex items-center gap-2'>Salary <FiDollarSign/></h4>
       <div className=' mb-4 '>
          <Button handleClick={handleClick} value="Hourly" title="Hourly"/>
          <Button handleClick={handleClick} value="Monthly" title="Monthly"/>
          <Button handleClick={handleClick} value="Yearly" title="Yearly"/>
       </div>

       <div>
            {/*
            <label className='sidebar-label-container text-sm text-black/70'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                <span className='checkmark'></span> All
            </label>
            */}
            
            <Input handleChange={handleChange} value={30} title="< 300,000K" name="test2"/>
            <Input handleChange={handleChange} value={50} title="< 500,000K" name="test2"/>
            <Input handleChange={handleChange} value={80} title="< 800,000K" name="test2"/>
            <Input handleChange={handleChange} value={100} title="< 1,000,000K" name="test2"/>
        </div>
    </div>
  )
}

export default Salary
