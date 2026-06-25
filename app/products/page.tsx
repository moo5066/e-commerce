import React from 'react'
import { getProducts } from '@/lib/api'
import ProductFilter from '@/components/ProductFilter'

export default async function product() {
    

const products = await getProducts()

return(


<div className='p-20'>
<div className='flex flex-col gap-1 mb-10'>
<h1 className='text-4xl font-bold mb-10'>All Products</h1>
</div>
<ProductFilter products={products}/>
</div>

)
}