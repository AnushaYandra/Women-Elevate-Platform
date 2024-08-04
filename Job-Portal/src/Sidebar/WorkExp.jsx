import React from 'react'
import { FiCalendar } from 'react-icons/fi'
import Input from '../Components/Input'

function WorkExp({handleChange}) {
    return (
        <div >
            <h4 className='text-lg mb-2 text-dark-green font-bold flex items-center gap-2'>Work Experience <FiCalendar/></h4>
    
            <div>
                <label className='sidebar-label-container text-sm text-black/70'>
                    <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                    <span className='checkmark'></span> Any experience
                </label>
    
                <Input handleChange={handleChange} value="Internship" title="Internship" name="test"/>
                <Input handleChange={handleChange} value="Work remotely" title="Work remotely" name="test"/>
            
    
            </div>
        </div>
      )
}

export default WorkExp
