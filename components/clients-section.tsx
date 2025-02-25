"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const clients = [
  { name: "Aesche", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Dalmia", logo: "/placeholder.svg?height=100&width=200" },
  { name: "UltraTech", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Thermax", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Dangote", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Bharathi Cement", logo: "/placeholder.svg?height=100&width=200" },
]

export function ClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const timer = setInterval(scroll, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-primary uppercase font-semibold">OUR CLIENTS</h3>
          <h2 className="text-4xl font-bold text-[#1a1a4e]">Clients</h2>
        </div>
        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="flex gap-12 overflow-x-hidden whitespace-nowrap">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="inline-block min-w-[200px]">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

