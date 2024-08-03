import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
   <footer className='boreder-t'>
<div className='flex-center wrapper flex-between flex flex-col gap-4
p-5 text-center sm:flex-row'>
  <Link href="/">
    <Image
     src="/assets/images/logo.png"
     alt='logo'
     width={148}
     height={58}
   />
  </Link>


  <div>
        <p>&copy; 2024 Pixa Ai. All rights reserved.</p>
        <p>Address: MALIYAKKAL HOUSE, VELLOOR, VELLOOR, Malappuram, Pookkottur, Vellur, Kerala, India, 676517</p>
    </div>

</div>
   </footer>
  )
}
