import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="logo">
      <Image
        src="/images/maruti_logo.png"
        alt="Maruti Group Logo"
        width={100}
        height={80}
        className="w-100 h-100 object-contain"
        // className="w-100 h-100 object-contain"
      />
    
     </Link>
  )
}

