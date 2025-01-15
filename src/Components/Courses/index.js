import React from 'react'
import Image from './course-img.jpg'
import Datascience from './datascience.jpg'
import DataStructure from './ds.jpg'
const index = () => {
  return (
    <section class="h-[60vh] mb-24">
      <p className='text-4xl p-4 text-purple-600'>Trending courses</p>
      <div className='flex justify-evenly'>
        {/* course 1*/}
        <div class="border-4 w-96 p-6 rounded-lg hover:border-purple-300">
          <img className="h-28 w-26 rounded-full border-4 inline" alt="full-stack" src={Image}/>
          <p className='text-xl font-bold pt-4 pb-2'>Full Stack Developer</p>
          <p className='text-lg'>Looking to explore a career as a Full stack Developer? This is the right place to start! Master the basic concepts required to
            become a Full Stack Developer with this free bootcamp. Learn the basics and move on towards a successful career!
          </p>
          <div className='w-full flex justify-center pt-3'>
            <div className='w-36 h-8 flex justify-center items-center cursor-pointer rounded-lg bg-purple-200 hover:border-2 hover:border-purple-300 hover:bg-white'>
              <p>Explore</p>
            </div>
          </div>
        </div>

        {/*course 2*/}
        <div class="border-4 w-96 p-6 rounded-lg hover:border-purple-300">
          <img className='h-28 w-26 rounded-full border-4 inline' alt="Data science" src={Datascience}/>
          <p className='text-xl font-bold pt-4 pb-2'>Data Scientist</p>
          <p className='text-lg'>Unlock the power of data! Elevate your expertise with our Mastering Data Analytics Course. Gain proficiency in Python, SQL, Excel,
            and Power BI for data analysis, visualization, and reporting. Explore hands-on real-world projects and much more.
          </p>
          <div className='w-full flex justify-center pt-3'>
            <div className='w-36 h-8 flex justify-center items-center cursor-pointer rounded-lg bg-purple-200 hover:border-2 hover:border-purple-300 hover:bg-white'>
              <p>Explore</p>
            </div>
          </div>
          
        </div>

        {/*course 3*/}
        <div class="border-4 w-96 p-6 rounded-lg hover:border-purple-300">
          <img className='h-28 w-26 rounded-full border-4 inline' alt="DSA" src={DataStructure}/>
          <p className='text-xl font-bold pt-4 pb-2'>DSA for Interview Preparation</p>
          <p className='text-lg'>This course covers the essential information that every serious programmer needs to know about algorithms and data structures,
            with emphasis on applications and scientific performance analysis of Java implementations.
          </p>
          <div className='w-full flex justify-center pt-3'>
            <div className='w-36 h-8 flex justify-center items-center cursor-pointer rounded-lg bg-purple-200 hover:border-2 hover:border-purple-300 hover:bg-white'>
              <p>Explore</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default index