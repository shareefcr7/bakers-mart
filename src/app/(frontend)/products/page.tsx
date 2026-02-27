import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductList } from "@/components/product-list"
import { getProducts, getCategories, IProduct } from "@/lib/db"
import { ProductGridSkeleton } from "@/components/skeletons"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { FadeIn } from "@/components/ui/fade-in"
import Image from "next/image"

// Force dynamic to ensure data is fresh
export const dynamic = 'force-dynamic'

// Async component to fetch data
async function ProductGrid() {
  const products = (await getProducts()) as IProduct[]
  const categories = await getCategories()
  return <ProductList initialProducts={products} categories={categories} />
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products-hero-bg.png"
            alt="Bakersmart Premium Products"
            fill
            className="object-cover object-center scale-105"
            priority
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#120000]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#020202]" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 translate-y-8 flex flex-col items-center justify-center">
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] mt-2 max-w-5xl mx-auto font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3e5b5] to-[#c69b4e] hover:from-[#e5c07b] hover:via-white hover:to-[#e5c07b] transition-all duration-1000 animate-pulse hover:scale-105 drop-shadow-2xl cursor-default">
              Our Products
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-[#f3e5b5]/80 mt-8 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Premium quality ingredients & supplies for every baker.
            </p>
          </FadeIn>
        </div>
      </section>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-20">
          <ScrollReveal variant="fadeUrl" delay={0.3}>
            <Suspense fallback={<ProductGridSkeleton />}>
               <ProductGrid />
            </Suspense>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </div>
  )
}
