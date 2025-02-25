import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-primary uppercase font-semibold">ABOUT Maruti Infra</h3>
              <h2 className="text-4xl font-bold text-[#1a1a4e]">We Provide Complete Construction Solutions</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
             Maruti Infrastructure is a leading civil construction, mechanical engineering, and material supply firm based in Baloda Bazar, Chhattisgarh. Founded and led by Mr. Ashish Natthani, we bring years of expertise and a commitment to quality and innovation. Our work spans industrial structures, building projects, roads, and mechanical fabrication.

            </p>
          </div>
          <div className="space-y-6">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ayoki Building"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#8B1D1D] text-white p-8 rounded-lg">
              <div className="flex items-center gap-4">
                <span className="text-6xl font-bold">11</span>
                <div className="text-xl">
                  YEAR&apos;S EXPERIENCE IN
                  <div className="font-light">construction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

