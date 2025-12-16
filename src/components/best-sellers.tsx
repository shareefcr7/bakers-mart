"use client"

import { ProductCard } from "./product-card"
import { products } from "@/lib/data"
import { motion } from "framer-motion"

export function BestSellers() {
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-sans text-foreground">Best Sellers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most popular tools and ingredients, trusted by professional bakers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
