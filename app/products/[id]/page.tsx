import { getProductById } from '@/lib/api'
import AddToCartButton from '@/components/AddToCartButton'

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProductById(id)

  return (
    <div className='p-20 flex flex-col md:flex-row gap-10'>
      <img src={product.image} alt={product.title} className='h-80 object-contain' />
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold'>{product.title}</h1>
        <p className='text-gray-600'>{product.description}</p>
        <p className='text-2xl font-bold'>${product.price}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  )
}