import React from 'react'
import { getProducts } from '@/lib/api'
import AddToCartButton from '@/components/AddToCartButton'
export default async function product() {
    

const products = await getProducts()


return(
    <div className='m-20 '>
        <div className='flex flex-col gap-1  mb-10'>
        <h1 className='text-4xl font-bold'>Featured Products</h1>
        <p className='text-gray-600 text-lg'>Check out our most popular items</p>
        </div>
        <div className='grid lg:grid-cols-5  md:grid-cols-3 sm:grid-cols-2 gap-4 '>
     {products.map((product:any) => (
        <div key={product.id} className=' w-full h-full flex flex-col items-center gap-2 border border-gray-300 rounded-lg p-4'>
<img src={product.image} alt={product.title} className="h-40 object-contain" />            
<h2 className='text-sm text-center mt-5'>{product.title}</h2>            
<p className='font-bold text-xl'>${product.price} </p>
<AddToCartButton product={product} />
        </div>
    ))}
    
    </div>
    </div>
)
}