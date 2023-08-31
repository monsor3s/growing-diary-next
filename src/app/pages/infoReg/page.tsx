import React from 'react'
import styles from './infoRegPage.module.sass'
import Button from '@/objects/Button/Button'

export default function InfoRegPage() {
  return (
    <section className={styles.infoRegContainer}>
      <div className={styles.wrapperTitle}>
        <h1>Valores última rega</h1>
        <div className={styles.boxField}>
          <span>Entrada PPM:</span>
          <p>100 PPM</p>
          <span>Entrada PH:</span>
          <p>6.0 PH</p>
        </div>
        <div className={styles.boxField}>
          <span>Saída PPM:</span>
          <p>100 PPM</p>
          <span>Saída PH:</span>
          <p>6.0 PH</p>
        </div>
      </div>
      <div className={styles.wrapperBody}>
        <h1>Nova Rega</h1>
        <section className={styles.entryValue}>
          <div className={styles.boxInput}>
              <label>Entrada PPM:</label>
              <input type="text" />
          </div>
          <div className={styles.boxInput}>
              <label>Entrada PH:</label>
              <input type="text" />
          </div>
          <Button />
        </section>
        <section className={styles.exitValue}>
          <div className={styles.boxInput}>
              <label>Saída PPM:</label>
              <input type="text" />
          </div>
          <div className={styles.boxInput}>
              <label>Saída PH:</label>
              <input type="text" />
          </div>
          <Button />
        </section>
      </div>
    </section>
  )
}
