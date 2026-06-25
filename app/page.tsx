import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import {getProducts} from '@/lib/api'
import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';

import Navbar from './components/Navbar'

export default async function Page() {

const products = await getProducts()


  return(
    <div>
            <Navbar/>

      <div className='bg-[#f5ece9] flex flex-col gap-5 px-32 py-20 '>
        <h1 className='lg:text-6xl text-4xl font-bold lg:w-[50%]'>Discover Amazing Products at Great Prices</h1>
        <p className='lg:text-xl text-base lg:w-[50%]'>Shop the latest collection of electronics, accessories, and more. Find everything you need in one place.</p>
        <button className='cursor-pointer w-fit flex flex-row gap-1 items-center  bg-[#EC6A37] rounded-lg text-white py-3 px-5  hover:scale-105 transition duration-300'><span className='text-lg font-bold'>Shop Now</span> <span><FaArrowRight size={20} color='white'/></span></button>
      </div>


<div className='m-20'>
  <div className='flex flex-col gap-1 mb-10'>
    <h1 className='text-4xl font-bold'>Featured Products</h1>
    <p className='text-gray-600 text-lg'>Check out our most popular items</p>
  </div>
  <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4'>
    {products.slice(0, 10).map((product: any) => (
      <Link key={product.id} href={`/products/${product.id}`} className='flex flex-col items-center gap-2 border border-gray-300 rounded-lg p-4'>
        <img src={product.image} alt={product.title} className="h-40 object-contain" />
        <h2 className='text-sm text-center mt-5'>{product.title}</h2>
        <p className='font-bold text-xl'>${product.price}</p>
        <AddToCartButton product={product} />
      </Link>
    ))}
  </div>
<Link href='/products' className='mt-10 border border-[#EC6A37] p-2 w-fit text-center rounded-lg text-[#EC6A37] text-base font-bold hover:scale-105 transition duration-300 cursor-pointer hover:bg-[#EC6A37] hover:text-white mx-auto block'>
  View All Products →
</Link>
</div>


    </div>
  )
}
