import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <nav className='w-full border-0 py-4 lg:px-24 px-10 bg-gray-950'>
    <h1 className='text-3xl text-white'>
    <Link href="/">Tasty Next</Link>
    </h1>
     </nav>
  )
}

export default Navbar
