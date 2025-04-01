"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, MapPin, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#1B1B2F] text-white pt-16 pb-4 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Social Links */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-02-21_at_9.17.42_PM-removebg-preview-qNvV5tU1sp0hjFGpOUlSeMo1Ch92jX.png"
                alt="Maruti Group Logo"
                width={60}
                height={60}
              />
              <span className="text-xl font-bold"><span className="text-orange-500">Maruti</span> Group</span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Cement
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Boiler
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Steel
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Power
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Material Handling Systems
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Other Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
             
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Support</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Our Location</h4>
                    <p className="text-sm text-gray-300">
                      Maruti Group
                      <br />
                   309,Sadar Road,
Baloda Bazar,
Chhattisgarh, 493332
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Email Address</h4>
                    <Link href="mailto:info@ayokifabricon.com" className="text-sm text-gray-300 hover:text-primary">
                      info@marutiinfra.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-4 mt-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2022 All Rights Reserved{" "}
              <Link href="/" className="text-white hover:text-primary">
                Maruti Group 
              </Link>{" "}
              Designed by{" "}
              <Link href="#" className="text-white hover:text-primary">
               Johaar Life
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary p-2 rounded-full hover:bg-primary/90 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </footer>
  )
}

