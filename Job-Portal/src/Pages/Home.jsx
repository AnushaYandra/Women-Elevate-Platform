import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import Card from '../Components/Card';
import Jobs from './Jobs';
import Sidebar from '../Sidebar/Sidebar';
import Newsletter from '../Components/Newsletter';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] =useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;
  const navigate = useNavigate();


  useEffect(()=> {
    setIsLoading(true);
    fetch('https://women-elevate-platform-1.onrender.com/all-jobs', {mode: 'no-cors'}).then(res => res.json()).then(data=> {
      setJobs(data);
      setIsLoading(false);
    })
  }, [])

  //handle input change
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
      setQuery(event.target.value)

  }

  //filter jobs by title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) != -1);

  //------Radio filtering------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const resetFilters = (event) => {
    setSelectedCategory(null);
    window.location.reload();
  }

  //------button based filtering------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  //Calculate the index range 
  const calculatePageRange = () => {
    const startIndex = (currentPage -1)*itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return {startIndex, endIndex};
  }

  //Function for the next page
  const nextPage = () => {
     if(currentPage < Math.ceil(filteredItems.length / itemPerPage)){
       setCurrentPage(currentPage+1);
     }
  }

  //function for previous page
  const prevPage = () => {
    if(currentPage > 1){
       setCurrentPage(currentPage-1);
    }
  }

  //main function
  const fileteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    //filtering input items
    if(query){
      filteredJobs = filteredItems;
    }

    //Category filtering 
    if(selected){
      filteredJobs = filteredJobs.filter(({jobLocation, minPrice, experienceLevel, salaryType, employmentType, postingDate})=> (
         postingDate >= selected ||  
         jobLocation.toLowerCase() === selected.toLowerCase() || 
         parseInt(minPrice) <= parseInt(selected) || 
         salaryType.toLowerCase() === selected.toLowerCase() || 
         employmentType.toLowerCase() === selected.toLowerCase() ||
         experienceLevel.toLowerCase() === selected.toLowerCase()
         
      ));
    }

    //slice the data based on current page 
    const {startIndex, endIndex} = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data,i)=> <Card key={i} data={data}/>)
  }

  const result = fileteredData(jobs, selectedCategory, query);

  return (
    <div>
    <Toaster/>
      <Banner query={query} handleInputChange={handleInputChange}/>

      {/*Main Content*/}
      <div className=' md:grid grid-cols-4 lg:px-24 px-4 pb-5 bg-cream flex flex-col gap-10'>
        
         {/* Left Side */}
         <div>
          <Sidebar handleChange={handleChange} handleClick={handleClick} resetFilters={resetFilters}/>
        </div>

         {/* Job Cards */}
         <div className='col-span-2 bg-white p-4 rounded-xl '>
          {
             isLoading ? (<p className='font-medium '>Loading...</p>) : result.length>0 ? <Jobs result={result}/> : 
             <><h3 className='font-bold mb-2 text-lg '>{result.length} Jobs</h3> <p>No Data Found</p></>
          }

          {/* Pagination here  */}
          {
             result.length > 0 ? (
             <div className='flex justify-center mt-4 space-x-8'>  
                <button onClick={prevPage}  disabled={currentPage===1} className='text-dark-green border-b-2 border-dashed border-dark-brown font-bold'> Previous </button>
                <span className='text-black/70 mx-2'> Page {currentPage} of {Math.ceil(filteredItems.length/itemPerPage)} </span>
                <button onClick={nextPage} disabled={currentPage===Math.ceil(filteredItems.length/itemPerPage)} 
                className='text-dark-green font-bold border-b-2 border-dashed border-dark-brown'> Next </button>
             </div>) 
            : ""
          }
          

        </div>
         
         {/* Right Side */}
         <div><Newsletter /></div>

      </div>
    </div>
  )
}

export default Home
