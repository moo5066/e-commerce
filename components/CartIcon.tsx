"use client"
import { CiShoppingCart } from "react-icons/ci"
import { useCart } from "@/context/CartContext"
import Link from "next/link"

export default function CartIcon() {
  const { totalItems } = useCart()

  return (
    <Link href="/cart" className="relative">
      <CiShoppingCart size={40} />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#EC6A37] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  )
}