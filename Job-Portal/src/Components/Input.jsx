import React from 'react'

const Input = ({handleChange, value, title, name}) => {
  return (
    <label className='sidebar-label-container text-sm text-black/70'>
       <input type="radio" name={name} value={value} onChange={handleChange} className='hidden-radio' />
       <span className='checkmark'></span> {title}
    </label>

     
  );
};

export default Input