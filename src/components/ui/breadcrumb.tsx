"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbProps {
  className?: string
  color?: string
}

export function Breadcrumb({ className, color = "text-neutral-500" }: BreadcrumbProps) {
  const pathname = usePathname()
  
  // Split pathname into segments, filter out empty strings
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center space-x-2 text-sm", className)}>
      <Link 
        href="/" 
        className={cn(
          "flex items-center hover:opacity-80 transition-opacity", 
          color
        )}
      >
        <Home className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {segments.map((segment, index) => {
        // Construct the path for this segment
        const href = `/${segments.slice(0, index + 1).join('/')}`
        
        // Check if it's the last segment
        const isLast = index === segments.length - 1
        
        // Format the segment name (replace hyphens/underscores with spaces and capitalize)
        const name = segment
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, char => char.toUpperCase())

        return (
            <div key={href} className="flex items-center space-x-2">
            <ChevronRight className={cn("w-4 h-4 opacity-50", color)} />
            {isLast ? (
                <span className={cn("font-medium opacity-100 cursor-default", color)}>
                {name}
                </span>
            ) : (
                <Link 
                href={href} 
                className={cn("hover:opacity-80 transition-opacity opacity-70", color)}
                >
                {name}
                </Link>
            )}
            </div>
        )
      })}
    </nav>
  )
}
