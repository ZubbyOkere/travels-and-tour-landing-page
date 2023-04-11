import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='w-full h-screen object-cover top-0 left-0'
        src='https://images.pexels.com/photos/1450340/pexels-photo-1450340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=''
      />
      <div className='w-full h-screen absolute bg-black/50 top-0  left-0' />
      <div className='absolute w-full h-screen top-0 left-0 flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] mx-auto absolute p-4'>
          <p>All Inclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Private Beaches and Getaways
          </h1>
          <p className='max-w-[600px]  drop-shadow-2xl py-2 text-2xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            blanditiis. Non inventore dolores quidem itaque natus adipisci
            quibusdam eum beatae, voluptas commodi.
          </p>
          <button className='hover:bg-white hover:text-black text-lg font-medium'>
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
