import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between py-4">
        <Link href="/" className="w-48">
          <Image 
            src="/assets/images/logo.png" width={240} height={100}
            alt="Evently logo" 
          />
        </Link>

        <SignedIn>
          <nav className="md:flex hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex items-center gap-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            {/* Add any other components or elements for signed out users if needed */}
          </SignedOut>

          <nav className="flex gap-2 sm:gap-4 text-sm sm:text-base">
            <Link href="/contact-us" className="text-gray-700 font-bold hover:text-gray-900">
              Contact Us
            </Link>
            <Link href="/terms-and-conditions" className="text-gray-700 font-bold hover:text-gray-900">
              Terms and Conditions
            </Link>
            <Link href="/refund-policy" className="text-gray-700 font-bold hover:text-gray-900">
              Refund Policy
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
