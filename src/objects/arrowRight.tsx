import React from 'react'
import Image from 'next/image'
import arrow from '../assets/keyboard-arrow-right.png'


export function ArrowRight() {
  return (
    <Image 
          src={arrow} 
          alt="arrow right" 
          width={28}
          height={28} 
    />
  )
}

export default ArrowRight