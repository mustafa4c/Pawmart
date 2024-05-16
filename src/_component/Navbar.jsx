import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
<header >
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <a className="block text-teal-600" href="#">
      <span className="sr-only">Home</span>
      
    </a>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link href={"/"} className="text-gray-500 transition hover:text-[#7480ff]/75" > Home </Link>
          </li>

          <li>
            <Link href={"/about"} className="text-gray-500 transition hover:text-[#7480ff]/75" > About </Link>
          </li>

          <li>
            <Link href={"/services"} className="text-gray-500 transition hover:text-[#7480ff]/75" > Services </Link>
          </li>

          <li>
            <Link href={"/join"} className="text-gray-500 transition hover:text-[#7480ff]/75" > Join Now </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="block rounded-md bg-[#7480ff] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1d232a]"
            href="#"
          >
            Login
          </a>

          <a
            className="hidden rounded-md bg-[#1d232a] px-5 py-2.5 text-sm font-medium text-[#7480ff] transition hover:text-white/75 sm:block"
            href="#"
          >
            Register
          </a>
        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}
