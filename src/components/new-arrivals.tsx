"use client"

import { ProductCard } from "./product-card"
import { motion } from "framer-motion"
import Image from "next/image"

import { IProduct } from "@/lib/db"

interface NewArrivalsProps {
  products?: IProduct[];
}

export function NewArrivals({ products = [] }: NewArrivalsProps) {
  const newArrivals = products.slice(0, 4)

  return (
    <section className="bg-neutral-900 border-t border-white/5">
      {/* Header with Luxury Background */}
      <div className="relative py-24 md:py-32 overflow-hidden bg-black min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/new-arrivals-bg.png"
            alt="New Arrivals"
            fill
            className="object-cover object-center scale-105"
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3e5b5] to-[#c69b4e] hover:from-[#e5c07b] hover:via-white hover:to-[#e5c07b] transition-all duration-1000 drop-shadow-2xl cursor-default mb-6"
          >
            New Arrivals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#f3e5b5]/80 max-w-2xl mx-auto text-lg md:text-xl font-medium"
          >
            Fresh out of the oven! Check out our latest additions to the store.
          </motion.p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {newArrivals.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <ProductCard product={product} priority={true} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
