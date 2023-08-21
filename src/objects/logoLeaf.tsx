import React from 'react'
import Image from 'next/image'
import LeafImage from '../assets/leaf-3-1.png'

export function LogoLeaf() {
  return (
    <Image 
          src={LeafImage} 
          alt="leaf image" 
          width={50}
          height={50} 
    />
  )
}

export default LogoLeaf