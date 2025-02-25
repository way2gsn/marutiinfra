import Image from "next/image"
import { Button } from "@/components/ui/button"

export function VisionMissionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-primary uppercase font-semibold">OUR VISION</h3>
              <h2 className="text-4xl font-bold text-[#1a1a4e]">Our Commitment to Excellence and Innovation</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be the most reliable, trusted, and preferred partner in the construction and material supply chain, enhancing value for all stakeholders through cost-effective and innovative solutions.
            </p>
          </div>
          {/* Mission Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-primary uppercase font-semibold">OUR MISSION</h3>
              <h2 className="text-4xl font-bold text-[#1a1a4e]">Striving for Customer Delight and Value Creation</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We aim for customer delight by providing comprehensive logistics and construction solutions, understanding critical requirements, and ensuring cost-effective, intact deliveries through innovative practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

