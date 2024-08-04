import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import  { Link, useNavigate }  from 'react-router-dom';
import CreatableSelect from 'react-select/creatable';
import toast, { Toaster } from 'react-hot-toast';
import { auth, db } from "../Components/firebase";
import { getDoc, doc } from "firebase/firestore";

function CreateJob() {
  const [selectedOption, setSelectedOption] = useState(null);
  const { handleSubmit, reset, register, formState: { errors } } = useForm();
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();
  
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
           //console.log("No such document!");
           reject("No user data found");
         }
       } else {
         //console.log("User is not logged in");
         reject("User is not logged in");
       }
     });
    });
   };

   useEffect(() => {
      fetchUserData();
   }, []);

  const onSubmit = values => {
    values.skills = selectedOption;
    //console.log(values);
    fetch('http://localhost:3000/post-job', {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(values)
    }).then(res=> res.json().then((result)=> {
      //console.log(result);
      
      //if(result.acknowledged === true){
      //   alert("Job Posted Successfully!")}
      toast.success("Job Posted Successfully!")
      reset();
    }))
  }

  const options = [
    {value: "C/C++", label: "C/C++"},
    {value: "HTML", label: "HTML"},
    {value: "CSS", label: "CSS"},
    {value: "React", label: "React"},
    {value: "Node", label: "Node"},
    {value: "Python", label: "Python"},
    {value: "Angular", label: "Angular"},
    {value: "Java", label: "Java"},
    {value: "MongoDB", label: "MongoDB"},
  ]

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 pb-10'>
      <Toaster />
      {/* form page */}

      <div className='text-center py-5 bg-white '>
           <h1 className='inline-block text-3xl font-semibold text-dark-brown border-b-2 border-brown border-dashed'>Enter <span className='text-dark-green'>Job</span> Details</h1>
      </div>

      <div className='bg-cream py-1 px-4 lg:px-16 rounded-lg pb-5'>

          <form onSubmit={handleSubmit(onSubmit)}> 

            {/* first row */}
            <div className='create-job-flex pb-5 pt-8'>
                <div className='lg:w-1/2 w-full '>
                   <label className='inline-block mb-2 text-md font-semibold text-dark-green border-b-2 border-brown border-dashed'>Job Title⭒</label>
                   <input type="text" placeholder={"Web Developer"} {...register("jobTitle")} className='create-job-input'/>
                </div>
                
                <div className='lg:w-1/2 w-full '>
                <label className='inline-block mb-2 text-md font-semibold text-dark-green border-b-2 border-brown border-dashed'>Company Name⭒</label>
                   <input type="text" placeholder="Ex: Microsoft" {...register("companyName")} className='create-job-input'/>
                </div>
            </div>

            {/* second row */}
            <div className='create-job-flex pb-5'>
                <div className='lg:w-1/2 w-full '>
                <label className='inline-block mb-2 text-md font-semibold text-dark-green border-b-2 border-brown border-dashed'>Minimum Salary</label>
                   <input type="text" placeholder={"$20k"} {...register("minPrice")} className='create-job-input'/>
                </div>
                
                <div className='lg:w-1/2 w-full '>
                <label className='inline-block mb-2 text-md font-semibold text-dark-green border-b-2 border-brown border-dashed'>Maximum Salary</label>
                   <input type="text" placeholder="$120k" {...register("maxPrice")} className='create-job-input'/>
                </div>
            </div>

            {/* third row */}
            <div className='create-job-flex pb-5'>
                <div className='lg:w-1/2 w-full '>
                <label className='inline-block mb-2 text-md font-semibold text-dark-green border-b-2 border-brown border-dashed'>Salary type</label>
                   <select {...register("salaryType")} className='create-job-input'>
                      <option value="">Choose your salary</option>
                      <option value="Hourly">Hourly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Yearly">Yearly</option>
                    </select>
                </div>
                
                <div className='lg:w-1/2 w-full '>
                <label className='inline-block mb-2 text-md font-semibold text-dark-green border-b-2 border-brown border-dashed'>Job Location</label>
                   <input type="text" placeholder="India" {...register("jobLocation")} className='create-job-input'/>
                </div>
            </div>

            {/* fourth row */}
            <div className='create-job-flex pb-5'>
                <div className='lg:w-1/2 w-full '>
                <label className='inline-block mb-2 text-md font-semibold text-dark-green border-b-2 border-brown border-dashed'>Job Posting Date</label>
                   <input type="date" placeholder="" {...register("postingDate")} className='create-job-input'/>
                </div>

                <div className='lg:w-1/2 w-full '>
                <label className='inline-block mb-2 text-md font-semibold text-dark-green border-b-2 border-brown border-dashed'>Experience Level</label>
                   <select {...register("experienceLevel")} className='create-job-input'>
                      <option value="">Choose your experience</option>
                      <option value="Any Experience">Any Experience</option>
                      <option value="Internship">Internship</option>
                      <option value="Work remotely">Work remotely</option>
                    </select>
                </div>
                
            </div>
 
            {/* fifth row */}
            <div className='pb-5'>
            <label className='inline-block mb-2 text-md font-semibold text-dark-green border-b-2 border-brown border-dashed'>Required Skill Set</label>
                <CreatableSelect placeholder="Mention Skills"
                defaultValue={selectedOption} onChange={setSelectedOption} options={options} isMulti/>
            </div>

            {/* sixth row */}
            <div className='create-job-flex pb-5'>
                <div className='lg:w-1/2 w-full '>
                <label className='inline-block mb-2 text-md font-semibold text-dark-green border-b-2 border-brown border-dashed'>Company Logo</label>
                   <input type="url" placeholder="Paste your company logo URL: https://weshare.com/img" {...register("companyLogo")} className='create-job-input'/>
                </div>

                <div className='lg:w-1/2 w-full '>
                <label className='inline-block mb-2 text-md font-semibold text-dark-green border-b-2 border-brown border-dashed'>Employment Type</label>
                   <select {...register("employmentType")} className='create-job-input'>
                      <option value="">Choose your employment</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Temporary">Temporary</option>
                    </select>
                </div>
                
            </div>

            {/* seventh row */}
            <div className='w-full pb-5'>
            <label className='inline-block mb-2 text-md font-semibold text-dark-green border-b-2 border-brown border-dashed'>Job Description</label>
                <textarea className='w-full pl-3 py-1.5 focus:outline-none create-job-input' 
                rows={5} placeholder='Job Description' {...register("description")}/>
            </div>

            {/* last row */}
            <div className='create-job-flex pb-5'>
               <div className='w-full'>
               <label className='inline-block mb-2 text-md font-semibold text-dark-green border-b-2 border-brown border-dashed'>Job Posted By</label>
                   <input type="email" placeholder={"name@gmail.com"} {...register("postedBy")} className='create-job-input'/>
               </div>

               <div className='w-full'>
               <label className='inline-block mb-2 text-md font-semibold text-dark-green border-b-2 border-brown border-dashed'>Job Link</label>
                   <input type="url" placeholder={"Job Link"} {...register("jobLink")} className='create-job-input'/>
               </div>
            </div>

            {userDetails? (
               <div className='text-center'>
                 <button type="submit" className='my-5 py-1 px-8 rounded button shadow-custom font-semibold'>Post a job!</button>
               </div>
            ) : (
               <div className='text-center'>
                 <Link to="/Login" className='my-5 py-1 px-8 rounded button shadow-custom font-semibold'>Log in to Post</Link>
               </div>
            )}

          </form>
      </div>
    </div>
  )
}

export default CreateJob
