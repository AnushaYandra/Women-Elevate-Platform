import React from 'react'

const About = () => {
  return (
    <div className='px-6 py-6 flex flex-col items-center bg-cream responsive-about-background'>

        <h1 className='text-3xl font-semibold text-dark-green border-b-2 border-dashed border-brown mb-6 mt-8'>About Us</h1>

        <div className='w-full md:w-2/3 lg:w-2/4 p-5 md:p-10 bg-white/50 rounded-md border border-brown flex flex-col gap-5 items-center justify-center shadow-custom'>
              <p className='text-sm text-black/90'>
              Welcome to <span className='text-md font-semibold'>Women Elevate</span>, where we are dedicated to empowering women by connecting them with exceptional career opportunities. Our mission is to create an inclusive job platform that supports women's professional growth and success. Here, women can find jobs tailored to their skills and aspirations, while recruiters can easily post job openings and discover talented female candidates.
              </p>

              <p className='text-sm text-black/90'>
              At <span className='text-md font-semibold'>Women Elevate</span>, we believe in fostering an environment where women can thrive and achieve their career goals. Our platform offers a seamless experience for both job seekers and recruiters:
              </p>
      
              <p className='text-sm text-black/90'>
              For Job Seekers: Explore a wide range of job opportunities specifically curated for women. Our user-friendly interface allows you to search for jobs, view detailed descriptions, and apply with ease. Additionally, you can access estimated salary information to make informed career decisions.
              </p>
      
              <p className='text-sm text-black/90'>
              For Recruiters: Post job openings effortlessly and reach a diverse pool of qualified female candidates. Our platform helps you find the right talent to drive your organization forward, ensuring a more inclusive and dynamic workforce.
              </p>
      
              <p className='text-sm text-black/90'>
              Join us at <span className='text-md font-semibold'>Women Elevate</span> and be part of a community that values diversity, inclusivity, and empowerment. Together, we can build a brighter future where women's careers flourish and opportunities are boundless.
              </p>
        </div>
    </div>
  )
}

export default About
