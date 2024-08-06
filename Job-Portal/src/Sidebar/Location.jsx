import React from 'react'
import Input from '../Components/Input'
import { FiMapPin } from 'react-icons/fi'

function Location({handleChange}) {
  return (
    <div >
        <h4 className='text-lg mb-2 text-dark-green font-bold flex items-center gap-2'>Location <FiMapPin/></h4>

        <div>
            <label className='sidebar-label-container text-sm text-black/70'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                <span className='checkmark'></span> All
            </label>

            <Input handleChange={handleChange} value="Delhi, India" title="Delhi" name="test"/>
            <Input handleChange={handleChange} value="Pune, India" title="Pune" name="test"/>
            <Input handleChange={handleChange} value="Mumbai, India" title="Mumbai" name="test"/>
            <Input handleChange={handleChange} value="Hyderabad, India" title="Hyderabad" name="test"/>
            <Input handleChange={handleChange} value="Bangalore, India" title="Bangalore" name="test"/>
        

        </div>
    </div>
  )
}

export default Location
