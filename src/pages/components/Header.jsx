import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='fixed top-[58px] right-[150px] left-[150px] bg-transparent flex justify-between items-center'>
      {/* logo */}
      <div>
        <h1 className='text-lg font-bold italic text-white '>Strawrage</h1>
      </div>

      {/* navigation menu */}
      <nav>
        <ul className='flex space-x-[50px] text-white'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li className='font-bold'>
            <Link href='/'>Product</Link>
          </li>
          <li>
            <Link href='/'>Pricing</Link>
          </li>
          <li>
            <Link href='/'>Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* signup button */}
      <button className='bg-darkBlue font-bold text-white rounded-md py-[10px] px-[18px]'>
        Sign Ups
      </button>
    </header>
  )
}
