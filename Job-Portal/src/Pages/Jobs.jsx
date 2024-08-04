import React from 'react'

function Jobs({result}) {
  return (
    <div >
      <h3 className='text-lg font-bold mb-2 text-dark-brown border-b-2 border-dashed border-light-brown text-center'> Jobs for you </h3>

      <section>{result}</section>
    </div>

  )
}

export default Jobs
