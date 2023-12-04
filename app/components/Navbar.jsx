import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import sukuna from "../../public/th.webp"

const Navbar = () => {
  return (
    <nav>
      <Image
        src={sukuna}
        alt='Sukuna'
        width={100}
        height={100}
        quality={100}
        placeholder='blur'
      />
      <Link href="/">go to Dashboard</Link>
      <Link href="/tickets">go to ticketsy</Link>

        </nav>
  )
}

export default Navbar