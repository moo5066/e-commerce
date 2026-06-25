"use client"
import { useState } from "react"
import AddToCartButton from "./AddToCartButton"
import Link from "next/link"

const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"]

export default function ProductFilter({ products }: { products: any[] }) {
  const [selected, setSelected] = useState("all")

  const filtered = selected === "all" ? products : products.filter(p => p.category === selected)

  return (
    <div>
      <div className="flex gap-3 mb-10 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full border font-semibold capitalize transition duration-300 ${selected === cat ? "bg-[#EC6A37] text-white border-[#EC6A37]" : "border-gray-300 hover:border-[#EC6A37] hover:text-[#EC6A37]"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {filtered.map((product: any) => (
          <Link href={`/products/${product.id}`} key={product.id} className="flex flex-col items-center gap-2 border border-gray-300 rounded-lg p-4">
            <img src={product.image} alt={product.title} className="h-40 object-contain" />
            <h2 className="text-sm text-center mt-5">{product.title}</h2>
            <p className="font-bold text-xl">${product.price}</p>
            <AddToCartButton product={product} />
          </Link>
        ))}
      </div>
    </div>
  )
}