'use client'
import { useCart } from '@/context/CartContext'
const page = () => {

const {cart,addToCart,removeFromCart}=useCart()




  return (
    <div className='p-20'>
        <div>
<h1 className='text-4xl font-bold mb-10'>Your Cart</h1>
        
        {cart.length === 0 && <h1>Cart is empty</h1>}
        <div className='flex flex-col gap-5'>
      {cart.map((item:any)=>(
        <div key={item.id} className='flex flex-row gap-5 items-center border border-gray-300 rounded-lg p-4'>
            <div className='flex-1'>
          <img src={item.image} alt={item.title} className="h-40 object-contain" />
          <h1 className='text-sm text-gray-600 mt-5'>{item.title}</h1>
          <p className='font-bold text-xl'>{item.price}</p>
          </div>
          <div className='flex flex-row gap-2 items-center'>
          <button onClick={() => addToCart(item)}>+</button>
          <span className='font-bold'>{item.quantity}</span>
          <button onClick={() => removeFromCart(item.id)} className='border-2 border-[#EC6A37] hover:bg-[#EC6A37] hover:text-white hover:scale-100 transition duration-300 font-semibold p-2 rounded-lg'>Remove from Cart</button>
        </div>
        </div>
        
      ))}
      </div>
      {cart.length>0 &&(
        <p className='font-bold mt-10 text-2xl'>Total:${cart.reduce((sum,item)=>sum+item.price * item.quantity,0).toFixed(2)}</p>
      )}
      </div>
    </div>
  )
}

export default page
