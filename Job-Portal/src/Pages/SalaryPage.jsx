import React, { useEffect, useState } from 'react'


function SalaryPage() {
    const [searchText, setSearchText] = useState("");
    const [salary, setSalary] = useState([]);

    useEffect(() => {
        fetch("salary.json").then(res => res.json()).then(data => setSalary(data))
        //console.log(salary);
    }, [searchText])

    const handleSearch = () => {
        const filter = salary.filter(
            (salary) => salary.title.toLowerCase().indexOf(searchText.toLowerCase()) != -1);  
            setSalary(filter);
    }

  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-24 px-4'>
        <div>
            <div className='py-14 mt-3 responsive-salary-background flex flex-col items-center justify-center rounded-lg'>
            <div>
                <h2 className='text-5xl text-dark-brown font-medium mb-1 text-center'>Estimated Salary</h2>
                <p className='text-lg text-center font-semibold text-dark-green'><a href='/' className='hover:border-b-2 border-brown border-dashed'>Home</a></p>
            </div>
    
            <div className='search-box p-2 text-center gap-2 flex mt-8'>
                <input 
                    type='text' 
                    name='search' 
                    id='search' 
                    placeholder='Search for salaries' 
                    onChange={(e) => setSearchText(e.target.value)} 
                    className='py-2 pl-3 border bg-white border-brown rounded-lg focus:outline-none w-60 md:w-96 placeholder:text-gray-400' 
                />
                <button onClick={handleSearch} className='rounded px-5 py-1 button shadow-custom'>Search</button>
            </div>
        </div>

        <div> 
            {/*Salary display card*/}
            <div className='grid lg:grid-cols-3 p-12 md:grid-cols-2 grid-cols-1 gap-12 my-8 items-center bg-cream rounded-lg'>
                {
                    salary.map((data) => (
                        <div key={data.id} className='shadow-custom px-4 py-8 bg-white rounded-md cursor-pointer salary-card'> 
                            <h4 className='font-semibold text-xl text-dark-brown'>{data.title}</h4>
                            <p className='my-2 font-medium text-dark-green'>{data.salary}</p>

                            <a href='/' className='underline text-black/70 mr-5'>{data.status}</a>
                            <a href='/' className='underline text-black/70'>{data.skills}</a>

                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default SalaryPage
