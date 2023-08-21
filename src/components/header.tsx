import React from 'react'
import moment from 'moment';
import Image from "next/image";
import styles from '../app/styles/header.module.sass'
import LeafImage from '../assets/leaf-3-1.png'
import { Shadows_Into_Light } from 'next/font/google';
import Link from 'next/link';

const shadowIntoLight = Shadows_Into_Light({
  subsets: ['latin'],
  weight: ['400'],
})


export default function Header() {

  const now = moment(new Date());
  const past = moment('2023-07-08');
  const duration = moment.duration(now.diff(past));
  const days = Math.round(duration.asDays());

  return (
    <>
      <header>
        <div className={styles.logo}>
          <Image 
          src={LeafImage} 
          alt="leaf image" 
          width={50}
          height={50} 
          />
          <span className={shadowIntoLight.className}>growing diary</span>
        </div>
        {/* <h2>Bubbla Kush</h2>
        <h2>{days} dias de vida</h2>
        <span>Período atual: Vegetativo</span> */}
        
      </header>
    </>
)}
