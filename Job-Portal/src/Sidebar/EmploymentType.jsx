import React from 'react'
import { MdOutlineWorkHistory } from "react-icons/md";
import Input from '../Components/Input'

function EmploymentType({handleChange}) {
    return (
        <div >
            <h4 className='text-lg mb-2 text-dark-green font-bold flex items-center gap-2'>Employment Type <MdOutlineWorkHistory /></h4>
    
            <div>
                <label className='sidebar-label-container text-sm text-black/70'>
                    <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                    <span className='checkmark'></span> Any type
                </label>
    
                <Input handleChange={handleChange} value="Temporary" title="Temporary" name="test"/>
                <Input handleChange={handleChange} value="Part-time" title="Part-time" name="test"/>
                <Input handleChange={handleChange} value="Full-time" title="Full-time" name="test"/>

            </div>
        </div>
      )
}

export default EmploymentType
