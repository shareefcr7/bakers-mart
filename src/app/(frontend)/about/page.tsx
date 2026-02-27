import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

import { AnimatedHeading } from "@/components/ui/animated-heading"
import { FadeIn } from "@/components/ui/fade-in"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
        
        {/* Background Image - Artisan Bakery */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-us-hero-bg.png"
            alt="Artisan Bakery Background"
            fill
            className="object-cover object-center scale-105"
            priority
            quality={100}
            sizes="100vw"
          />
          {/* Deep premium gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#120000]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#020202]" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10 translate-y-8 flex flex-col items-center justify-center">
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] mt-2 max-w-5xl mx-auto font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3e5b5] to-[#c69b4e] hover:from-[#e5c07b] hover:via-white hover:to-[#e5c07b] transition-all duration-1000 animate-pulse hover:scale-105 drop-shadow-2xl cursor-default">
              Built by Bakers. Built for Bakers.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* The Story Behind Bakers Mart */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-[0.15em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#7E0806] via-[#B22222] to-[#7E0806] drop-shadow-sm">
              The Story Behind Bakers Mart
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side text */}
            <div className="space-y-8 text-lg md:text-[1.35rem] text-[#f3e5b5]/80 leading-[1.8] font-light tracking-wide">
              <FadeIn delay={0.3}>
                <p className="font-medium text-[#e5c07b] text-2xl md:text-3xl mb-10 leading-snug drop-shadow-md">
                  Every strong supply chain begins with firsthand experience.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p>
                  The founders of Bakers Mart are engineers and professionals who have been immersed in the food and baking industry since 2008. What began as a modest bread-making unit in Kunnamangalam, Calicut, under the brand <strong className="text-white font-semibold">Vita</strong>, was built on a simple principle: quality products require disciplined systems.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p>
                  In 2017, operations expanded into a larger production facility, and the brand evolved into <strong className="text-white font-semibold">Fillberry</strong> — manufacturing breads, cakes, cupcakes, and related baked products. This phase was not just about growth; it was about understanding the operational realities of bakeries from the inside.
                </p>
              </FadeIn>
              <FadeIn delay={0.6}>
                <p>
                  After the pandemic, in 2022, the business moved upstream into ingredient distribution. The company established itself as a leading supplier in the Malabar market, building strong market share in fresh yeast and wholesale baking inputs.
                </p>
              </FadeIn>
              <FadeIn delay={0.7}>
                <p>
                  By May 2025, this evolution culminated in the launch of <strong className="text-[#e5c07b] font-semibold drop-shadow-lg">Bakers Mart</strong> — a structured, professional supply platform.
                </p>
              </FadeIn>
            </div>

            {/* Right side image - FIXED FOR MOBILE */}
            <FadeIn delay={0.4}>
              <div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(126,8,6,0.3)] border border-white/10 group bg-[#7E0806]/10">
                <Image
                  src="/about-company.jpg"
                  alt="Bakersmart Story"
                  fill
                  className="object-contain p-2 md:p-6 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                  <p className="text-[#f3e5b5] text-lg md:text-xl font-medium tracking-wide">From modest origins to</p>
                  <p className="text-white text-2xl md:text-3xl font-bold">Leading Suppliers</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="mt-20">
            <FadeIn delay={0.8}>
                <p className="text-center text-[#e5c07b] font-medium text-2xl mb-8">A structured, professional supply platform serving:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[#f3e5b5]">
                  {[
                    "Bakeries & Industrial Baking Units",
                    "Restaurants, Hotels & Resorts",
                    "Catering Companies",
                    "Dessert / Juice / Cool Bars",
                    "Quick-service Food Outlets",
                    "Home Bakers"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-[#7E0806]/50 hover:bg-white/10 transition-colors">
                      <div className="w-3 h-3 rounded-full bg-[#7E0806] flex-shrink-0 shadow-[0_0_10px_#7E0806]" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
            </FadeIn>

            <FadeIn delay={0.9}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 text-lg text-[#f3e5b5]/90 font-light leading-relaxed">
                <div>
                  <p className="mb-6"><span className="text-white font-semibold text-xl">But storefronts are only the visible layer.</span></p>
                  <p>Behind them is a growing logistics backbone — warehousing, cold-chain handling, procurement systems, and dependable last-mile delivery. Customers can walk in and pick up what they need, or rely on scheduled supply supported by infrastructure built for consistency, quality control, and reliability.</p>
                </div>
                <div className="bg-gradient-to-br from-[#7E0806]/20 to-transparent border-l-4 border-[#7E0806] p-8 rounded-r-3xl">
                  <p className="text-2xl font-medium text-[#e5c07b] italic leading-relaxed">
                    "To professionalize and mature the ingredient supply ecosystem for bakeries, caterers, and restaurants — delivering not just products, but reliability."
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Journey & About Bakers Mart */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-[#7E0806]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Our Journey */}
            <div>
              <FadeIn delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#e5c07b] via-[#f3e5b5] to-[#c69b4e] drop-shadow-sm">
                  Our Journey
                </h2>
              </FadeIn>
              <div className="space-y-0 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-6 md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#7E0806] before:via-[#7E0806]/50 before:to-transparent">
                  
                  <div className="relative pl-16 md:pl-20 pb-16 group">
                    <div className="absolute top-0 left-0 ml-6 -translate-x-1/2 w-5 h-5 rounded-full bg-black border-[3px] border-[#e5c07b] group-hover:bg-[#e5c07b] group-hover:scale-125 transition-all duration-300 ring-8 ring-black"></div>
                    <span className="text-[#e5c07b] text-2xl font-bold tracking-wider mb-2 block font-mono">2008</span>
                    <p className="text-[#f3e5b5]/80 text-lg leading-relaxed">Our story began in Kunnamangalam, Calicut — as a small bread-making unit built on discipline, hard work, and a passion for quality.</p>
                  </div>
                  
                  <div className="relative pl-16 md:pl-20 pb-16 group">
                    <div className="absolute top-0 left-0 ml-6 -translate-x-1/2 w-5 h-5 rounded-full bg-black border-[3px] border-[#e5c07b] group-hover:bg-[#e5c07b] group-hover:scale-125 transition-all duration-300 ring-8 ring-black"></div>
                    <span className="text-[#e5c07b] text-2xl font-bold tracking-wider mb-2 block font-mono">2017</span>
                    <p className="text-[#f3e5b5]/80 text-lg leading-relaxed">Expanded into a larger facility as <strong className="text-white">Fillberry</strong>, learning the realities of baking from the inside — sourcing, consistency, logistics, and reliability.</p>
                  </div>

                  <div className="relative pl-16 md:pl-20 pb-16 group">
                    <div className="absolute top-0 left-0 ml-6 -translate-x-1/2 w-5 h-5 rounded-full bg-black border-[3px] border-[#e5c07b] group-hover:bg-[#e5c07b] group-hover:scale-125 transition-all duration-300 ring-8 ring-black"></div>
                    <span className="text-[#e5c07b] text-2xl font-bold tracking-wider mb-2 block font-mono">2022</span>
                    <p className="text-[#f3e5b5]/80 text-lg leading-relaxed">Moved upstream into ingredient distribution, becoming a trusted supplier of fresh yeast and essential bakery inputs across the region.</p>
                  </div>

                  <div className="relative pl-16 md:pl-20 group">
                    <div className="absolute top-0 left-0 ml-6 -translate-x-1/2 w-6 h-6 rounded-full bg-[#7E0806] ring-8 ring-[#7E0806]/30 shadow-[0_0_20px_rgba(126,8,6,0.8)] border-2 border-white"></div>
                    <span className="text-[#7E0806] text-3xl font-bold tracking-wider mb-3 block font-mono shadow-sm">2025</span>
                    <p className="text-white text-xl leading-relaxed font-semibold">Bakers Mart was born.</p>
                    <p className="text-[#f3e5b5]/90 mt-2 text-lg">Today, we serve bakeries, restaurants, caterers, and home bakers with one mission:</p>
                    <div className="mt-6 bg-[#7E0806]/10 p-6 rounded-2xl border border-[#7E0806]/30">
                      <p className="text-[#e5c07b] text-xl font-medium italic">"To be the most reliable supply partner in the industry."</p>
                    </div>
                  </div>
              </div>
            </div>

            {/* About Bakers Mart */}
            <div>
              <FadeIn delay={0.4}>
                <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#e5c07b] via-[#f3e5b5] to-[#c69b4e] drop-shadow-sm">
                  About Bakers Mart
                </h2>
              </FadeIn>
              <div className="space-y-8 text-[#f3e5b5]/80 text-lg md:text-xl leading-[1.8] font-light tracking-wide">
                <FadeIn delay={0.5}>
                  <p>Bakers Mart was founded by professionals who have been part of the baking and food production ecosystem since 2008.</p>
                </FadeIn>
                <FadeIn delay={0.6}>
                  <p>What began as a small bread unit in Kunnamangalam evolved into a scaled production facility in 2017 under <strong className="text-white font-semibold">Fillberry</strong>, manufacturing breads, cakes, cupcakes, and related products. This hands-on production experience exposed a critical gap in the market — inconsistent ingredient supply and fragmented logistics.</p>
                </FadeIn>
                <FadeIn delay={0.7}>
                  <p>In 2022, the founders transitioned into structured ingredient distribution, becoming a major regional supplier of fresh yeast, liquid glucose, premixes, fats, fillings, and other bakery essentials.</p>
                </FadeIn>
                <FadeIn delay={0.8}>
                  <p>By May 2025, this experience matured into <strong className="text-[#e5c07b] font-semibold">Bakers Mart</strong> — a comprehensive supply platform serving bakeries, restaurants, catering companies, dessert studios, quick-service food outlets, and home bakers.</p>
                </FadeIn>
                
                <FadeIn delay={0.9}>
                  <div className="mt-14 bg-gradient-to-br from-[#7E0806]/40 via-white/5 to-transparent p-[1px] rounded-[2.5rem] shadow-2xl">
                    <div className="bg-[#0a0a0a] p-10 md:p-12 rounded-[2.5rem] h-full relative overflow-hidden">
                      <div className="absolute -right-10 -top-10 w-64 h-64 bg-[#7E0806]/30 blur-[80px] rounded-full"></div>
                      <p className="font-semibold text-2xl md:text-3xl text-white mb-10 relative z-10 border-b border-white/10 pb-8 leading-snug">Our storefronts represent a larger supply-chain infrastructure that includes:</p>
                      <ul className="space-y-8 relative z-10">
                        <li className="flex items-center space-x-6 group">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7E0806] to-[#2a0101] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(126,8,6,0.5)] group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-7 h-7 text-[#e5c07b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          </div>
                          <span className="text-white/90 font-medium text-xl group-hover:text-white transition-colors">Professional procurement systems</span>
                        </li>
                        <li className="flex items-center space-x-6 group">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7E0806] to-[#2a0101] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(126,8,6,0.5)] group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-7 h-7 text-[#e5c07b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                          </div>
                          <span className="text-white/90 font-medium text-xl group-hover:text-white transition-colors">Warehousing and cold-chain capability</span>
                        </li>
                        <li className="flex items-center space-x-6 group">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7E0806] to-[#2a0101] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(126,8,6,0.5)] group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-7 h-7 text-[#e5c07b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                          </div>
                          <span className="text-white/90 font-medium text-xl group-hover:text-white transition-colors">Bulk and wholesale distribution</span>
                        </li>
                        <li className="flex items-center space-x-6 group">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7E0806] to-[#2a0101] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(126,8,6,0.5)] group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-7 h-7 text-[#e5c07b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          </div>
                          <span className="text-white/90 font-medium text-xl group-hover:text-white transition-colors">Reliable last-mile delivery</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-[#020202] relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7E0806] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#e5c07b] rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto flex items-stretch">
              
              {/* Our Vision Card */}
              <FadeIn delay={0.2} className="h-full">
                <div className="bg-[#111111] p-10 md:p-14 rounded-[2rem] border border-white/5 h-full group relative overflow-hidden flex flex-col items-start transition-colors duration-500">
                    
                    {/* Triangle Watermark */}
                    <div className="absolute top-10 right-10 p-0 opacity-20 pointer-events-none">
                      <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 15L85 80H15L50 15Z" stroke="#e5c07b" strokeWidth="4" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-[#5A0604] flex items-center justify-center mb-10 shadow-lg shrink-0 transition-transform duration-500 group-hover:scale-105">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5Z" stroke="#e5c07b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#e5c07b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    <h3 className="text-4xl md:text-[2.5rem] font-bold mb-8 tracking-tight shrink-0 text-transparent bg-clip-text bg-gradient-to-br from-[#e5c07b] via-[#f3e5b5] to-[#c69b4e]">
                      Our Vision
                    </h3>
                    <p className="text-[#a0a0a0] text-lg leading-[1.8] font-light">
                      To professionalize and modernize the bakery and food ingredient supply chain, becoming the most trusted supply partner for bakeries, restaurants, and catering businesses.
                    </p>
                </div>
              </FadeIn>

              {/* Our Mission Card */}
              <FadeIn delay={0.4} className="h-full">
                <div className="bg-[#111111] p-10 md:p-14 rounded-[2rem] border border-white/5 h-full group relative overflow-hidden flex flex-col items-start transition-colors duration-500">
                    
                    {/* Checkmark Watermark */}
                    <div className="absolute top-10 right-10 p-0 opacity-[0.15] pointer-events-none">
                      <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" fill="#7E0806" />
                        <path d="M30 50L45 65L75 35" stroke="#111111" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-[#D8B675] flex items-center justify-center mb-10 shadow-lg shrink-0 transition-transform duration-500 group-hover:scale-105">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 3H15M10 3V11L5 20C4.7 20.4 4.8 21 5.3 21H18.7C19.2 21 19.3 20.4 19 20L14 11V3" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.5 18H18.5" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    <h3 className="text-4xl md:text-[2.5rem] font-bold mb-10 tracking-tight shrink-0 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/40">
                      Our Mission
                    </h3>
                    <ul className="space-y-6 text-[#a0a0a0] font-light text-[1.05rem] leading-[1.6]">
                      {[
                        "To ensure consistent availability of high-quality ingredients",
                        "To simplify procurement for food businesses of all sizes",
                        "To provide dependable logistics and timely delivery",
                        "To support both large-scale operations and emerging entrepreneurs",
                        "To build long-term relationships grounded in reliability and integrity"
                      ].map((mission, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mt-1 mr-4 shrink-0 bg-[#D8B675] rounded-full p-[3px]">
                            <svg className="w-3 h-3 text-[#111]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>
                </div>
              </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
