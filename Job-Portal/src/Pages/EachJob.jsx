import React, { useEffect, useState } from 'react';
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';
import { MdOutlineWorkHistory } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { auth, db } from "../Components/firebase";
import { getDoc, doc } from "firebase/firestore";

function EachJob() {
    const location = useLocation();
    const jobData = location.state || {};
    const {companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, employmentType, postingDate, description, experienceLevel, skills, jobLink} = jobData;
    const [userDetails, setUserDetails] = useState(null);
    const paragraphs = description.split('. ').filter(paragraph => paragraph.trim().length > 0);

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
        fetchUserData();
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);

    if (!jobData) {
        return <p>No job data available.</p>;
    }

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 pb-10'>
            
            <div className='text-center py-5 bg-white '>
               <h1 className='inline-block text-3xl font-semibold text-dark-green border-b-2 border-brown border-dashed'>Are you <span className='text-dark-brown'>Interested?</span></h1>
            </div>

            <div className='bg-cream py-1 px-4 lg:px-16 rounded-lg pt-8 md:responsive-job-background'>
                
                <div className='flex gap-4 flex-col sm:flex-row pb-8 items-center'>
                    <img src={companyLogo} alt={companyName} className='h-14 w-14' />
                    <div>
                        <div className='font-semibold flex flex-col items-center lg:items-start'>
                            <h1 className='text-xl text-dark-green hover:underline cursor-pointer pb-2'> {companyName} 💼</h1>
                            <h1 className='text-2xl text-dark-brown border-b-2 border-brown border-dashed'>{jobTitle}</h1>
                        </div>
                    </div>
                </div>

                <div className='text-black/70 text-base flex flex-col flex-wrap gap-3 mb-5'>
                  <p className='flex items-center gap-2 text-md'><FiMapPin className='text-dark-brown'/> <span className='font-semibold text-dark-green'>Location:</span> {jobLocation}</p>
                  <span className='flex items-center gap-2 text-md'><FiClock className='text-dark-brown'/> <span className='font-semibold text-dark-green'>Employment type:</span> {employmentType}</span>
                  <span className='flex items-center gap-2 text-md'><FiDollarSign className='text-dark-brown'/> <span className='font-semibold text-dark-green'>Salary range:</span> {minPrice}-{maxPrice}k {salaryType}</span>
                  <span className='flex items-center gap-2 text-md'><FiCalendar className='text-dark-brown'/> <span className='font-semibold text-dark-green'>Posted on:</span> {postingDate}</span>
                  <span className='flex items-center gap-2 text-md'><MdOutlineWorkHistory className='text-dark-brown'/> <span className='font-semibold text-dark-green'>Experience Level:</span> {experienceLevel}</span>
                </div>

                <div className='pb-5 text-black/70 text-base flex flex-wrap gap-5 '>
                    <p className='font-semibold text-dark-green border-b-2 border-brown border-dashed'>Skills:</p>
                    <div className='flex flex-wrap gap-5 '>
                      {Array.isArray(skills) && skills.length > 0 && skills.map((item) => (
                      <p key={item.value}> {item.label} </p>))}
                    </div>
                </div>
      
                <div>
                    <p className='inline-block font-semibold text-dark-green border-b-2 border-brown border-dashed'>Job Desciption:</p>
                    <div>
                      {paragraphs.map((paragraph, index) => (
                        <p key={index} className='mt-3 text-md text-black/70'>
                          • {paragraph.trim() + (index !== paragraphs.length - 1 ? '.' : '')}
                        </p>
                      ))}
                    </div>
                </div>

                {userDetails? (
                    <div className='flex justify-center' >
                        <Link to={jobLink} target="_blank" className='text-center'>
                           <button className='my-5 py-1 px-8 rounded button shadow-custom font-semibold'>Apply Now!</button>
                        </Link>
                    </div>
                ) : (
                    <div className='flex justify-center' >
                        <Link to="/Login" className='text-center'>
                           <button className='my-5 py-1 px-8 rounded button shadow-custom font-semibold'>Login to Apply</button>
                        </Link>
                </div>
                )}

            </div>

        </div>
    );
}

export default EachJob;
