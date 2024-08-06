import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import { MdCurrencyRupee } from "react-icons/md";

function Card({ data }) {
  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
    experienceLevel,
    skills,
  } = data;


  return (
    <section className='card rounded-xl job-card shadow-custom'>
      <Link to="/each-job" state={data} className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt={companyName} className='h-12 w-12' />
        <div>
          <div className='flex justify-between'>
            <div>
              <h4 className='font-bold text-dark-brown'>{companyName}</h4>
              <h3 className='text-lg font-bold mb-2 text-dark-green  hover:underline'>{jobTitle}</h3>
            </div>
          </div>

          <div className='text-black/60 text-base flex flex-wrap gap-3 mb-2'>
            <span className='flex items-center gap-1 text-sm'><FiMapPin /> {jobLocation}</span>
            <span className='flex items-center gap-1 text-sm'><FiClock /> {employmentType}</span>
            <span className='flex items-center gap-1 text-sm'><MdCurrencyRupee /> {minPrice}-{maxPrice} {salaryType}</span>
          </div>

          <div className='pb-5 text-black/60 text-base flex flex-wrap gap-2'>
              <p className='font-semibold'>Skills:</p>
                <div className='flex flex-wrap items-center gap-2 text-sm sm:gap-5 md:gap-1'>
                {Array.isArray(skills) && skills.length > 0 && skills.map((item, index) => (
                  <p key={item.value}>
                    {item.label}{index < skills.length - 1 && ','}
                  </p>
                ))}
                </div>
          </div>

        </div>
      </Link>
    </section>
  );
}

export default Card;
