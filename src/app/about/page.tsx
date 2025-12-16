import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

import { AnimatedHeading } from "@/components/ui/animated-heading"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary/10 overflow-hidden">
        <div className="container px-4 text-center z-10">
          <AnimatedHeading title="About Us" />
          <p className="text-xl text-muted-foreground mt-4">The story behind the sweetness.</p>
        </div>
        <div className="absolute inset-0 opacity-10 pattern-dots" /> 
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
             <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted">
                 {/* Placeholder for about image - using a solid color/pattern or generic placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/30">
                     Company Image
                 </div>
             </div>
             <div>
                 <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                     Founded in 2024, BAKERs MART began with a simple mission: to provide professional-grade baking supplies to everyone. We noticed that high-quality tools were often inaccessible to home bakers, and we set out to bridge that gap.
                 </p>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                     Today, we are a leading supplier of baking essentials, from precision tools to premium ingredients, helping thousands of bakers turn their culinary visions into reality.
                 </p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-2xl border border-border">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                  <p className="text-muted-foreground">
                      To empower bakers of all skill levels with the highest quality tools and ingredients, inspiring creativity and excellence in every bake.
                  </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                  <p className="text-muted-foreground">
                      To be the world's most trusted partner in the baking community, fostering a global culture of sharing, learning, and celebrating the art of baking.
                  </p>
              </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
