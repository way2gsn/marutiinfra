import Image from "next/image"
import { Button } from "@/components/ui/button"

export function NewsletterSection() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4 ">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-primary uppercase font-semibold">NEWS FEED</h3>
              <h2 className="text-4xl font-bold text-[#1a1a4e]">
                Subscribe to our
                <span className="text-[#8B1D1D]"> Newsletter</span>
              </h2>
            </div>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email *"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <div className="flex items-start gap-2">
                <input type="checkbox" id="consent" className="mt-1" required />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I agree to my email being stored and used to receive the newsletter.
                </label>
              </div>
              <Button className="bg-[#8B1D1D] hover:bg-[#8B1D1D]/90 text-white">Subscribe</Button>
            </form>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://img.freepik.com/free-vector/mail-sent-concept-illustration_114360-96.jpg?t=st=1740199614~exp=1740203214~hmac=96f195064ae9fbcea5dc387e9e8dc09f2386a2c02c17a0e7186da84a795bd9ba&w=740"
              alt="Newsletter illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

