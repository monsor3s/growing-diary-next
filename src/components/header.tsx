import React from 'react'
import Link from 'next/link';
import styles from '../app/styles/header.module.sass'
import { Shadows_Into_Light } from 'next/font/google';
import LogoLeaf from '@/objects/logoLeaf';

const shadowIntoLight = Shadows_Into_Light({
  subsets: ['latin'],
  weight: ['400'],
})


export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.linkHome}>
          <div className={styles.logo}>
            <LogoLeaf />
            <span className={shadowIntoLight.className}>growing diary</span>
          </div>
        </Link>
      </header>
    </>
)}
