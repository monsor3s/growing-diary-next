import React from 'react'
import styles from './infoRegPage.module.sass'

export default function InfoRegPage() {
  return (
    <section className={styles.infoRegContainer}>
      <div className={styles.wrapperTitle}>
        <div className={styles.boxField}>
          <span>Entrada última rega:</span>
          <p>100 PPM</p>
        </div>
        <div className={styles.boxField}>
          <span>Saída última rega:</span>
          <p>100 PPM</p>
        </div>
      </div>
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
        <button>Enviar</button>
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
        <button>Enviar</button>
      </section>
    </section>
  )
}
