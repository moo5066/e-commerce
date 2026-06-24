import React from 'react'
import { MdHome } from "react-icons/md";
import Link from 'next/link';
const page = () => {
  return (
    <div className='bg-[#FAF7F2] h-screen flex flex-col gap-5 justify-center items-center my-auto'>
      <div className='flex flex-col gap-2 items-center'>
      <div className='flex flex-row gap-2 items-center'>
<span className='text-[#EC6A37]'><MdHome size={40}/></span>
<p className='font-bold text-2xl'>ShopHub</p>
      </div>
      <div className='bg-white p-10 rounded-lg shadow-lg flex flex-col gap-2 w-96'>
        <h1 className='text-4xl font-bold'>Create Account</h1>
        <p className='text-gray-600 text-lg'>Join us and start shopping</p>

<div className='flex flex-col gap-2 mt-5'>
  <label htmlFor="" className='text-lg '>Full Name</label>
  <input type="text" placeholder='John Doe' required className='border-2 border-[#EC6A37] p-2 w-full rounded-lg'/>
  <label htmlFor="" className='text-lg '>Email</label>
  <input type="email" placeholder='you@example.com' required className='border-2 border-[#EC6A37] p-2 w-full rounded-lg'/>
  <label htmlFor="">Password</label>
  <input type="password" placeholder='...........'required className='border-2 border-[#EC6A37] p-2 w-full rounded-lg'/>
</div>

<button className='mt-10 bg-[#EC6A37] p-2 w-full rounded-lg text-white text-lg font-bold hover:scale-105 transition duration-300 cursor-pointer hover:bg-[#EC6A37]'>Create Account</button>

<p className='mt-5 mx-auto'>Already have an account? <Link href='/login' className='font-bold text-[#EC6A37]'>Login</Link></p>

      </div>
      <Link href='/' className='text-gray-500 hover:text-[#EC6A37] text-lg text-center mt-10'>← Back to Home</Link>

      </div>
    </div>
  )
}

export default page
