import React from 'react'
import styles from './tabelaPage.module.sass'


export default function TabelaPage() {
  return (
    <>
      <section className={styles.containerTabela}>
        <h1>VEGETATIVO</h1>
        <thead>
          <tr>
            <th>Segunda-Feira</th>
            <th>Terça-Feira</th>
            <th>Quarta-Feira</th>
            <th>Quinta-Feira</th>
            <th>Sexta-Feira</th>
            <th>Sábado</th>
            <th>Domingo</th>
            <th>Regas</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.lineOne}>
            <td>0.1~0.3ml/L</td>
            <td>0.1~0.3ml/L</td>
            <td>0.1~0.3ml/L</td>
            <td>0.1~0.3ml/L</td>
            <td>0.1~0.3ml/L</td>
            <td>0.1~0.3ml/L</td>
            <td>0.1~0.3ml/L</td>
            <td>2</td>
          </tr>
          <tr className={styles.lineTwo}>
            <td>1g/L 1:1</td>
            <td>1g/L 1:1</td>
            <td>1g/L 1:1</td>
            <td>1g/L 1:1</td>
            <td>1g/L 1:1</td>
            <td>1g/L 1:1</td>
            <td>1g/L 1:1</td>
            <td>2</td>
          </tr>
          <tr className={styles.lineThree}>
            <td>0.3gr/L</td>
            <td>1-2ml</td>
            <td>0.1-0.5g/L</td>
            <td>2ml/L</td>
            <td>0.1g/L</td>
            <td>0.5ml/L(foliar)</td>
            <td>2ml/L</td>
            <td>2</td>
          </tr>
          <tr className={styles.lineFour}>
            <td>1-3ml/L</td>
            <td>1ml/L</td>
            <td>~</td>
            <td>~</td>
            <td>~</td>
            <td>~</td>
            <td>~</td>
            <td>2</td>
          </tr>
        </tbody>
      </section>
    </>
  )
}
