import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div className='relative h-10 w-20 sm:h-16 sm:w-32'>
      <Image 
      fill 
      alt='Logo'
      src='/logo.png'
      className='absolute' />
    </div>
  )
}
