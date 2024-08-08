import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { auth, db } from "../Components/firebase";
import { getDoc, doc } from "firebase/firestore";

function MyJobs() {
    const [jobs, setJobs] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [userDetails, setUserDetails] = useState(null);
  
    const fetchUserData = async () => {
      return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              const userData = docSnap.data();
              setUserDetails(userData);
              resolve(userData);
            } else {
              console.log("No such document!");
              reject("No user data found");
            }
          } else {
            console.log("User is not logged in");
            reject("User is not logged in");
          }
        });
      });
    };
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const userData = await fetchUserData();
          if (userData && userData.email) {
            const response = await fetch(`https://women-elevate-platform-1.onrender.com/my-jobs/${userData.email}`);
            const data = await response.json();
            setJobs(data);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false);
        }
      };
    
      fetchData();
    }, []);
    


    const handleSearch = () => {
        const filter = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) != -1);  
        setJobs(filter);
        setIsLoading(false);
    }

    const handleDelete = (id) => {
        fetch(`https://women-elevate-platform-1.onrender.com/job/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount === 1) { // Check if a document was actually deleted
                toast.success("Job Deleted Successfully!");
                setJobs(jobs.filter(job => job._id !== id)); // Update the state to remove the deleted job
              } else {
                toast.error("Job could not be deleted.");
              }
            })
            .catch(error => {
              console.error("Error deleting job:", error);
              toast.error("An error occurred. Please try again.");
            });
    };

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <Toaster />
     
     <div className='flex justify-center mb-5 mt-2'>
       <h1 className='inline-block text-3xl font-semibold text-dark-brown border-b-2 border-brown border-dashed '>All My <span className='text-dark-green'>Jobs</span></h1>
     </div>
     
     
     <div className='responsive-post-background rounded-lg pt-8 pb-8'>

      <div className='text-center my-jobs-container'>
        <div className='search-box p-2 justify-center flex gap-4'>
            <input 
            onChange={(e)=> setSearchText(e.target.value)} placeholder='Search for a job'
            type='text' name='search' id='search' className='py-2 pl-3 border border-brown rounded-md bg-white focus:outline-none lg:w-6/12 mb-4 w-full placeholder:text-gray-400'></input>
            <button className='bg-green font-semibold px-5 py-1 rounded button shadow-custom mb-4' onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* Table of jobs */}
      <section class="py-1 bg-blueGray-50">
        <div class="w-full xl:w-10/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-custom rounded-xl ">
            <div class="rounded-t mb-0 px-4 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="inline-block font-semibold text-xl text-dark-brown border-b-2 border-dashed border-brown">All Jobs</h3>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link to="/post-job">
                     <button className='bg-green font-semibold px-5 py-1 rounded button shadow-custom mb-4' type="button">Post a new job</button>
                  </Link>
                </div>
              </div>
            </div>
        
            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr className='bg-cream'>
                    <th class="px-6 text-black/70 align-middle border border-solid border-blueGray-100 py-3 text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                  No.
                                </th>
                  <th class="px-6 text-black/70 align-middle border border-solid border-blueGray-100 py-3 text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                  Job Title
                                </th>
                   <th class="px-6 text-black/70 align-middle border border-solid border-blueGray-100 py-3 text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                  Company Name
                                </th>
                  <th class="px-6 text-black/70 align-middle border border-solid border-blueGray-100 py-3 text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                  Salary
                                </th>
                  <th class="px-6 text-black/70 align-middle border border-solid border-blueGray-100 py-3 text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                  Edit
                                </th>
                  <th class="px-6 text-black/70 align-middle border border-solid border-blueGray-100 py-3 text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                  Delete
                                </th>
                  </tr>
                </thead>

                {
                    isLoading? (<div><p className='flex items-center justify-center h-20'>Loading...</p></div>) : (
                        <tbody>
                        {
                            jobs.map((job,index)=> (
                                <tr key={index}>
                                  <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-black/70">
                                    {index+1}
                                  </th>
                                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 ">
                                    {job.jobTitle}
                                  </td>
                                  <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                    {job.companyName}
                                  </td>
                                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                  ₹{job.minPrice} - ₹{job.maxPrice}
                                  </td>
                                  <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                    <button className='hover:underline'><Link to={`/edit-job/${job?._id}`}>Edit</Link></button>
                                  </td>
                                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                    <button onClick={()=> handleDelete(job._id)} className='font-semibold rounded bg-red-300 hover:bg-red-400 py-2 px-5 shadow-custom'>Delete</button>
                                  </td>
                                </tr>
                            ))
                        }
                </tbody>
                    )
                }
        
              </table>
            </div>
          </div>
        </div>
        </section>

      <div className='text-center pt-12'>
        {userDetails ? (<></>) : (
          <>
            <h1 className='inline-block font-bold text-lg text-dark-green border-b-2 border-dashed border-brown'>Log in to view the jobs you have posted</h1>
            <Link to="/Login" className='px-5'>
            <button className=' button shadow-custom py-1 px-6 rounded-md font-semibold'> Login </button>
            </Link>
          </>
        )}
      </div>
        
      </div>

    </div>
  )
}

export default MyJobs
