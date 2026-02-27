"use client"


import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ICategory } from "@/lib/db"

const collections = [
  {
    id: 1,
    title: "Beginners Baking Tools",
    description: "Essential kit for starting your baking journey.",
    measurements: "Full Kit | Basics",
    image: "/images/baking-tools.png",
    link: "/products?category=Baking Tools",
    color: "from-stone-800/80 to-stone-950/80"
  },
  {
    id: 2,
    title: "Piping Nozzles",
    description: "Create professional designs with precision.",
    measurements: "Set of 12 | Set of 24",
    image: "/images/cutters.png",
    link: "/products?category=Piping Nozzles",
    color: "from-slate-800/80 to-slate-950/80"
  },
  {
    id: 3,
    title: "Bakewares",
    description: "Premium tins, trays, and moulds.",
    measurements: "Aluminium | Non-Stick",
    image: "/images/bakewares.png",
    link: "/products?category=Bakewares",
    color: "from-zinc-800/80 to-zinc-950/80"
  },
  {
    id: 4,
    title: "Cake Toppers",
    description: "Add a finishing touch to your cakes.",
    measurements: "Acrylic | Gold | Custom",
    image: "/images/theme-toppers.png",
    link: "/products?category=Theme Toppers",
    color: "from-yellow-800/80 to-yellow-950/80"
  },
  {
    id: 5,
    title: "Liners & Papers",
    description: "Quality liners for perfect cupcakes.",
    measurements: "Standard | Mini | Tulip",
    image: "/images/liners.png",
    link: "/products?category=Liners & Papers",
    color: "from-teal-800/80 to-teal-950/80"
  },
  {
    id: 6,
    title: "Premium Ingredients",
    description: "Finest cocoa, vanilla, and baking essentials.",
    measurements: "Bulk | Retail Packs",
    image: "/images/ingredients.png",
    link: "/products?category=Ingredients",
    color: "from-amber-900/80 to-yellow-950/80"
  },
  {
    id: 7,
    title: "Gel Colors",
    description: "Vibrant, concentrated colors for perfect icing.",
    measurements: "Single | Set of 10",
    image: "/images/gel-colors.png",
    link: "/products?category=Gel Colors",
    color: "from-indigo-900/80 to-purple-950/80"
  },
  {
    id: 8,
    title: "Silicon Moulds",
    description: "Flexible moulds for intricate desserts.",
    measurements: "Shapes | 3D Designs",
    image: "/images/silicone-moulds.png",
    link: "/products?category=Silicone Moulds",
    color: "from-pink-800/80 to-rose-950/80"
  },
  {
    id: 9,
    title: "Packaging & Boxes",
    description: "Present your treats professionally.",
    measurements: "Boxes | Bags | Boards",
    image: "/images/packaging-boxes.png",
    link: "/products?category=Packaging & Boxes",
    color: "from-brown-800/80 to-stone-950/80"
  },
  {
    id: 10,
    title: "Essence & Flavors",
    description: "Intense flavors for delicious bakes.",
    measurements: "Extracts | Emulsions",
    image: "/images/ingredients.png",
    link: "/products?category=Ingredients",
    color: "from-orange-800/80 to-red-950/80"
  },
  {
    id: 11,
    title: "Turn Tables & Stands",
    description: "Tools for decorating and display.",
    measurements: "Rotating | Tiered",
    image: "/images/cake-stand.png",
    link: "/products?category=Display Stands",
    color: "from-neutral-800/80 to-neutral-950/80"
  },
  {
    id: 12,
    title: "Sprinkles & Edibles",
    description: "Fun toppings for every occasion.",
    measurements: "Confetti | Dragees",
    image: "/images/sprinkles.png",
    link: "/products?category=Sprinkles",
    color: "from-fuchsia-800/80 to-pink-950/80"
  },
  {
    id: 13,
    title: "Signature Cakes",
    description: "Our famous multi-layered masterpieces.",
    measurements: "500g | 1kg | 2kg",
    image: "/images/heart-tin.png",
    link: "/products?category=Cake Tins",
    color: "from-rose-900/80 to-rose-950/80"
  },
  {
    id: 14,
    title: "Wedding Cakes",
    description: "Bespoke elegance for your dream day.",
    measurements: "2 Tier | 3 Tier | Custom",
    image: "/images/wedding-topper.png",
    link: "/products?category=Theme Toppers",
    color: "from-pink-900/80 to-purple-950/80"
  },
  {
    id: 15,
    title: "Birthday Cakes",
    description: "Fun, vibrant, and delicious celebrations.",
    measurements: "1kg | 2kg | 3kg",
    image: "/images/unicorn-topper.png",
    link: "/products?category=Theme Toppers",
    color: "from-blue-900/80 to-indigo-950/80"
  },
  {
    id: 16,
    title: "Diwali Specials",
    description: "Festive treats to light up your celebrations.",
    measurements: "Gift Boxes | Sweets",
    image: "/images/gold-sprinkles.png",
    link: "/products?category=Sprinkles",
    color: "from-orange-800/80 to-red-950/80"
  }
]

interface ShopByCollectionsProps {
  categories?: ICategory[];
}

import { categoryData } from "@/lib/data"

export function ShopByCollections({ categories = [] }: ShopByCollectionsProps) {
  
  const displayCategories = categories.length > 0 ? categories : categoryData.map(c => ({
    id: c.name,
    name: c.name,
    image: c.image
  }));

  return (
    <section className="bg-neutral-950">
      {/* Header Section - Luxury Background */}
      <div className="relative py-28 md:py-40 overflow-hidden bg-black min-h-[420px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shop-collections-bg.png"
            alt="Shop By Collections"
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

        {/* Decorative shimmer lines */}
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
              Explore Our Range
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
            Shop By
            <br />
            <span className="bg-gradient-to-r from-[#e5c07b] via-[#f3e5b5] to-[#c69b4e] bg-clip-text text-transparent">
              Collections
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
            Curated selections of our finest cakes and premium baking essentials.
          </motion.p>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayCategories.map((cat, index) => {
            // Find style reference from the existing collections array
            const style = collections.find(s => s.title === cat.name) || {
              title: cat.name,
              description: "Premium bakery supplies",
              measurements: "Premium Quality",
              color: "from-neutral-800/80 to-neutral-950/80"
            };

            return (
              <motion.div
                key={cat.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Link href={`/products?category=${encodeURIComponent(cat.name)}`} className="block h-full w-full">
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-neutral-900 z-0">
                    <Image 
                      src={cat.image || "/images/placeholder.png"} 
                      alt={cat.name} 
                      fill 
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    {/* Gradient Overlay for Text Visibility */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${style.color || "from-black/90 via-black/20 to-transparent"} z-10 transition-opacity duration-300 opacity-80 group-hover:opacity-90`} />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-6 z-20 flex flex-col justify-end h-full">
                    <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-1 drop-shadow-md leading-tight break-words">{cat.name}</h3>
                    
                    {/* Measurements Badge */}
                    <div className="inline-flex bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] md:text-xs text-white font-medium mb-2 max-w-full">
                      <span className="truncate">{style.measurements}</span>
                    </div>

                    <p className="text-white/80 text-[10px] sm:text-xs md:text-sm line-clamp-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                      {style.description}
                    </p>
                    
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
