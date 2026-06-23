import React from 'react'
import { MdHome } from "react-icons/md";
import Link from 'next/link';
const page = () => {    

  return (
      <div className='bg-[#FAF7F2] h-screen flex flex-col gap-5 justify-center items-center my-auto'>
        <div>
      <div className='flex flex-row justify-center items-center gap-2 '>
        <span className='text-[#EC6A37]'><MdHome size={40}/></span>
        <p className='text-xl font-bold'>ShopHub</p>
      </div>
      <div className='mt-5 bg-white p-10 rounded-lg shadow-lg flex flex-col gap-5 w-96'>
        <h1 className='text-4xl font-bold'>Welcome Back</h1>
        <p className='text-gray-600 text-lg'>Sign in to your account</p>
        <div className='flex flex-col gap-2 mt-10'>
            <label htmlFor="" className='text-lg '>Email</label>
          <input type="email" placeholder='you@example.com' required className='border-2  border-[#EC6A37] p-2 w-full rounded-lg'/>
          <label htmlFor=""  className='text-lg '>Password</label>
          <input type="password" placeholder='...........'required className='border-2 border-[#EC6A37] p-2 w-full rounded-lg'/>
          </div>
          <button className='mt-10 bg-[#EC6A37] p-2 w-full rounded-lg text-white text-lg font-bold hover:scale-105 transition duration-300 cursor-pointer hover:bg-[#EC6A37]'>Sign In</button>
          <p className='mt-5 mx-auto'><span className='text-gray-600'>Don't have an account?</span> <Link href='/signup' className='font-bold text-[#EC6A37]'>Sign up</Link></p>
        </div>
        <Link href='/' ><p className='text-gray-500 hover:text-[#EC6A37] text-lg text-center mt-10'>← Back to Home</p></Link>
      </div>
      </div>
  )
}

export default page
