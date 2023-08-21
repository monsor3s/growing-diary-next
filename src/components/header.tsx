import React from 'react'
import moment from 'moment';
import styles from '../app/styles/header.module.sass'
import { Shadows_Into_Light } from 'next/font/google';
import Link from 'next/link';
import LogoLeaf from '@/objects/logoLeaf';

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
      <header className={styles.header}>
        <Link href="/" className={styles.linkHome}>
          <div className={styles.logo}>
            <LogoLeaf />
            <span className={shadowIntoLight.className}>growing diary</span>
          </div>
        </Link>
        
        {/* <h2>Bubbla Kush</h2>
        <h2>{days} dias de vida</h2>
        <span>Período atual: Vegetativo</span> */}
      </header>
    </>
)}
