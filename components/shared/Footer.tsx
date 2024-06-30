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

  <p> 2024 Pixa Ai. All Rights Reserved</p>

  <Link href="/contact-us">
   Contact Us
  </Link>

  <Link href="/terms-and-conditions">
  Terms and Conditions
  </Link>

  <Link href="/refund-policy">
  Refund Policy
  </Link>
</div>
   </footer>
  )
}
