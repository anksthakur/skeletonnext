import Link from 'next/link'
import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <div className="text-lg md:text-xl lg:text-2xl">
          <Link href="/" className="hover:bg-gray-200 p-2 rounded transition-colors duration-300">
            <span className="mr-1 font-bold">B R</span>Architects
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/projects" className="hover:bg-gray-200 p-2 rounded transition-colors duration-300">Projects</Link>
          <Link href="/about" className="hover:bg-gray-200 p-2 rounded transition-colors duration-300">About</Link>
          <Link href="/contact" className="hover:bg-gray-200 p-2 rounded transition-colors duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
