import React from 'react'
import { FaArrowRight } from "react-icons/fa";


import Navbar from './components/Navbar'

const page = () => {
  return (
    <div>
            <Navbar/>

      <div className='bg-[#f5ece9] flex flex-col gap-5 px-32 py-20 '>
        <h1 className='lg:text-6xl text-4xl font-bold lg:w-[50%]'>Discover Amazing Products at Great Prices</h1>
        <p className='lg:text-xl text-base lg:w-[50%]'>Shop the latest collection of electronics, accessories, and more. Find everything you need in one place.</p>
        <button className='cursor-pointer w-fit flex flex-row gap-1 items-center  bg-[#EC6A37] rounded-lg text-white py-3 px-5  hover:scale-105 transition duration-300'><span className='text-lg font-bold'>Shop Now</span> <span><FaArrowRight size={20} color='white'/></span></button>
      </div>
    </div>
  )
}

export default page
