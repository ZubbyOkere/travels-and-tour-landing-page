import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    if (!nav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }
  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <h1 className='font-bold text-white text-2xl z-20'>Experiences</h1>
      <BiMenuAltRight
        onClick={handleNav}
        className='z-20 text-white cursor-pointer'
        size={30}
      />
      <d
        iv
        className={
          nav
            ? 'fixed top-0 left-0 text-gray-300 w-full h-screen  bg-black/90 px-4 py-7 flex-col z-10 ease-in duration-300'
            : 'absolute w-full top-0 left-[-100%] ease-in duration-300 z-10'
        }
      >
        <ul className='flex flex-col w-full h-full items-center justify-center'>
          <li className='p-8 text-3xl font-bold'>Home</li>
          <li className='p-8 text-3xl font-bold'>Tour</li>
          <li className='p-8 text-3xl font-bold'>Destinations</li>
          <li className='p-8 text-3xl font-bold'>Reservations</li>
          <li className='p-8 text-3xl fo nt-bold'>Rooms</li>
        </ul>
      </d>
    </div>
  )
}

export default Navbar
