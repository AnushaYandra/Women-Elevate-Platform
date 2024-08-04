import React from 'react'
import Input from '../Components/Input'
import { FiClock } from 'react-icons/fi'

function JobPosting({handleChange}) {
    const now = new Date(); 
    const twentyFourHoursAgo = new Date(now - 24 * 60 *60 * 1000);
    const SevenDaysAgo = new Date(now - 7*24 * 60 *60 * 1000);
    const ThirtyDaysAgo = new Date(now - 30*24 * 60 *60 * 1000);

    //conert date to string
    const twentyFourHourseAgoDate = twentyFourHoursAgo.toISOString().slice(0,10);
    const SevenDaysAgoDate = SevenDaysAgo.toISOString().slice(0,10);
    const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0,10);

    return (
        <div >
            <h4 className='text-lg mb-2 text-dark-green font-bold flex items-center gap-2'>Job Posting <FiClock/></h4>
    
            <div>
                <label className='sidebar-label-container text-sm text-black/70'>
                    <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                    <span className='checkmark'></span> Any Time
                </label>
    
                <Input handleChange={handleChange} value={twentyFourHourseAgoDate} title="Last 24 Hours" name="test"/>
                <Input handleChange={handleChange} value={SevenDaysAgoDate} title="Last 7 Days" name="test"/>
                <Input handleChange={handleChange} value={ThirtyDaysAgoDate} title="Last Month" name="test"/>
    
            </div>
        </div>
      )
}

export default JobPosting
