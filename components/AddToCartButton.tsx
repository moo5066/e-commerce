"use client"
import { useCart } from "@/context/CartContext"

type Product = {
  id: number
  title: string
  price: number
  image: string
}

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-5 border border-[#EC6A37] p-2 w-full rounded-lg text-[#EC6A37] font-bold hover:bg-[#EC6A37] hover:text-white hover:scale-105 transition duration-300 cursor-pointer"
    >
      Add to Cart
    </button>
  )
}