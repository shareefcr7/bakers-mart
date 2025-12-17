import { businessHighlights } from "@/lib/data"
import { Award, Package, DollarSign, Truck } from "lucide-react"

const icons = {
  "Premium Quality": Award,
  "Wide Range": Package,
  "Affordable Prices": DollarSign,
  "Fast Delivery": Truck
}

export function Features() {
  return (
    <section className="py-20 bg-black border-y border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {businessHighlights.map((highlight) => {
            const Icon = icons[highlight.title as keyof typeof icons] || Award
            return (
              <div key={highlight.title} className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-[#d4af37] mb-6 transition-transform group-hover:scale-110 duration-300 shadow-lg shadow-white/5">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-[#d4af37] transition-colors">{highlight.title}</h3>
                <p className="text-white/60 text-base leading-relaxed max-w-xs group-hover:text-white/80 transition-colors">{highlight.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
