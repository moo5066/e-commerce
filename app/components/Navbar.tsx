import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { MdHome } from "react-icons/md";


const Navbar = () => {
  return (
      <div className='flex justify-between items-center px-10 py-5 bg-white shadow-lg border-b border-gray-300'> 
      <div className='flex flex-row gap-2 items-center'>
       <span className='text-[#EC6A37]'><MdHome size={40}/></span> 
        <h1 className='font-bold text-2xl'>ShopHub</h1>
      </div>
      <div className='flex flex-row gap-2'>
          <span className=' '><CiShoppingCart size={40}/></span> 

<button className='bg-[#EC6A37] p-2 text-white rounded-lg text-base font-semibold hover:scale-105 transition duration-300 cursor-pointer'>
   Login
</button>
      </div>
      </div>
  )
}

export default Navbar

