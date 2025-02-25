import { CircleDot, Shield, Users, TrendingUp } from "lucide-react"

export function WhyUsSection() {
  const features = [
    {
      icon: <CircleDot className="h-8 w-8 text-primary" />,
      title: "Creativity",
      description:
        "Complex jobs. Difficult installations. Artistic beauty. Creativity is found across our wide breadth of work.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Reliability",
      description:
        "Our local team is trusted to finish every job according to plan. Even when the plans have to change mid-stream.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Service",
      description:
        "From project initiation until final signoff, you'll have dedicated, real people that make service our top priority.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Expertise",
      description: "Till today Maruti Infra has constructed plants in over 28 Countries all over the Globe.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-primary uppercase font-semibold">WHY US?</h3>
            <h2 className="text-4xl font-bold text-[#1a1a4e]">Why Choose Maruti Infra?</h2>
            <p className="text-gray-600 leading-relaxed">
              A well-engineered, high-quality product is not complete without proper and safe execution. We are here for
              that. We provide innovative solutions for the timely execution of projects without compromising on quality
              and safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

