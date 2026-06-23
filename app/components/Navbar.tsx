import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { MdHome } from "react-icons/md";
import Link from 'next/link';

const Navbar = () => {
  return (
      <div className='flex justify-between items-center px-10 py-5 bg-white shadow-lg border-b border-gray-300'> 
      <div className='flex flex-row gap-2 items-center'>
       <span className='text-[#EC6A37]'><MdHome size={40}/></span> 
        <h1 className='font-bold text-2xl'>Shop<span className='text-[#EC6A37]'>Hub</span> </h1>
      </div>
      <div className='flex flex-row gap-1 items-center'>
          <span className=' '><CiShoppingCart size={40}/></span> 

<Link href='/login' className='bg-[#EC6A37] p-2 text-white rounded-lg text-base font-semibold hover:scale-105 transition duration-300 cursor-pointer'>
   Login
</Link>
      </div>
      </div>
  )
}

export default Navbar

