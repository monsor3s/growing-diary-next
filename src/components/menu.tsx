import React from 'react'
import styles from '../app/styles/menu.module.sass'
import ArrowRight from '@/objects/arrowRight'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className={styles.container}>
      <div>
        <ArrowRight />
        <Link href="/pages/tabela">Tabela</Link>
      </div>
      <div>
        <ArrowRight />
        <Link href="/pages/infoPlant">Informações da Planta</Link>
      </div>
      <div>
        <ArrowRight />
        <Link href="/pages/infoReg">Informações de Regas</Link>
      </div>
      <div>
        <ArrowRight />
        <Link href="/pages/medidores">Medidores</Link>
      </div>
    </div>
  )
}
