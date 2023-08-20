import React from 'react'
import styles from '../app/styles/menu.module.sass'
import ArrowRight from '@/objects/arrowRight'

export default function Menu() {
  return (
    <div className={styles.container}>
      <div>
        <ArrowRight />
        <a href="">Tabela</a>
      </div>
      <div>
        <ArrowRight />
        <a href="">Informações da Planta</a>
      </div>
      <div>
        <ArrowRight />
        <a href="">Informações de Regas</a>
      </div>
      <div>
        <ArrowRight />
        <a href="">Medidores</a>
      </div>
    </div>
  )
}
