import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="logo">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-02-21_at_9.17.42_PM-removebg-preview-qNvV5tU1sp0hjFGpOUlSeMo1Ch92jX.png"
        alt="Maruti Infra Logo"
        width={40}
        height={40}
      />
      <span className="text-white text-xl font-bold">Maruti Infra</span>
    </Link>
  )
}

