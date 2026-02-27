"use client"

import Image from "next/image"
import { ProductCard } from "./product-card"
import { motion } from "framer-motion"

import { IProduct } from "@/lib/db"

interface BestSellersProps {
  products?: IProduct[];
}

export function BestSellers({ products = [] }: BestSellersProps) {
  const bestSellers = products.slice(0, 4)

  return (
    <section className="bg-neutral-950">
      {/* Header Section — same luxury style as Shop By Collections */}
      <div className="relative py-28 md:py-40 overflow-hidden bg-black min-h-[420px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/best-sellers-bg.png"
            alt="Best Sellers"
            fill
            className="object-cover object-center scale-105 transition-transform duration-[8000ms] hover:scale-110"
            quality={100}
            sizes="100vw"
            priority
          />
          {/* Multi-layer gradient for depth and text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-black/65 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Decorative shimmer border lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c69b4e]/60 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c69b4e]/60 to-transparent z-10" />

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Small badge label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-5"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#c69b4e]" />
            <span className="text-[#c69b4e] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
              Most Loved Products
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#c69b4e]" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-br from-white via-[#f3e5b5] to-[#c69b4e] drop-shadow-2xl cursor-default"
            style={{ textShadow: "0 4px 30px rgba(198,155,78,0.25)" }}
          >
            Best
            <br />
            <span className="bg-gradient-to-r from-[#e5c07b] via-[#f3e5b5] to-[#c69b4e] bg-clip-text text-transparent">
              Sellers
            </span>
          </motion.h2>

          {/* Decorative ornamental divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 my-6"
          >
            <span className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[#c69b4e]" />
            <span className="text-[#c69b4e] text-lg">✦</span>
            <span className="h-px w-4 bg-[#c69b4e]" />
            <span className="text-[#c69b4e] text-xs">◆</span>
            <span className="h-px w-4 bg-[#c69b4e]" />
            <span className="text-[#c69b4e] text-lg">✦</span>
            <span className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[#c69b4e]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[#f3e5b5]/80 max-w-xl mx-auto text-base md:text-lg font-medium tracking-wide"
          >
            Our most popular tools and ingredients, trusted by professional bakers.
          </motion.p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((product, index) => (
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
