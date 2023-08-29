import React from 'react'
import styles from './infoPlantPage.module.sass'
import moment from 'moment';

export default function InfoPlantPage() {
  const now = moment(new Date());
  const past = moment('2023-07-08');
  const duration = moment.duration(now.diff(past));
  const days = Math.round(duration.asDays());

  return (
    <section className={styles.infoPlantContainer}> 
      <div className={styles.boxField}>
        <span>Genética:</span>
        <p>Bubbla Kush</p>
      </div>
      <div className={styles.boxField}>
        <span>Data de início:</span>
        <p>08/07/2023</p>
      </div>
      <div className={styles.boxField}>
        <span>Banco:</span>
        <p>Royal Queen</p>
      </div>
      <div className={styles.boxField}>
        <span>Período atual:</span>
        <p>Flora</p>
      </div>
      <div className={styles.boxField}>
        <span>Tempo de vida:</span>
        <p>{days} dias</p>
      </div>
    </section>
  )
}

