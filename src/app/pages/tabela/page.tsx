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
        <h2>TRANSIÇÃO</h2>
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
            <td>1</td>
          </tr>
          <tr className={styles.lineTwo}>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1</td>
          </tr>
          <tr className={styles.lineThreeTrans}>
            <td>0.1ml/L</td>
            <td>1-2ml</td>
            <td>0.1-0.5g/L</td>
            <td>2ml/L</td>
            <td>0.5ml/L(foliar)</td>
            <td>0.3g/L</td>
            <td>até 14/set</td>
            <td>1</td>
          </tr>
        </tbody>
        <h3>ENGORDA</h3>
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
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>2</td>
          </tr>
          <tr className={styles.lineThreeTrans}>
            <td>0.1ml/L</td>
            <td>1-2ml</td>
            <td>0.1-0.5g/L</td>
            <td>2ml/L</td>
            <td>0.5ml/L(foliar)</td>
            <td>0.3g/L</td>
            <td>até 28/set</td>
            <td>2</td>
          </tr>
        </tbody>
        <h4>MATURAÇÃO</h4>
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
            <td>1</td>
          </tr>
          <tr className={styles.lineTwo}>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1.2g/L | 0.4g/L</td>
            <td>1</td>
          </tr>
          <tr className={styles.lineThreeTrans}>
            <td>0.1ml/L</td>
            <td>1-2ml</td>
            <td>0.1-0.5g/L</td>
            <td>2ml/L</td>
            <td>0.5ml/L(foliar)</td>
            <td>0.3g/L</td>
            <td>até 19/out</td>
            <td>1</td>
          </tr>
        </tbody>
      </section>
      <div className={styles.wrapperTabelas}>
        <section className={styles.containerTabelaPpm}>
              <h1>P P M</h1>
          <thead>
            <tr>
              <th>Até dia 29/jul</th>
              <th>400~500</th>
            </tr>
            <tr>
              <th>Até dia 19/ago</th>
              <th>600~700</th>
            </tr>
            <tr>
              <th>Até dia 24/ago</th>
              <th>700~900</th>
            </tr>
          </thead>
        </section>
        <section className={styles.sumarioNutri}>
          <h1>NUTRIENTES</h1>
          <span>PP + Nitrato de Cálcio</span>
          <span>Superóxido</span>
          <span>Micro-O</span>
          <span>Bokashi</span>
          <span>MKP</span>
          <span>MAP</span>
          <span>CalMag</span>
          <span>Silica</span>
          <span>Citocinina</span>
          <span>Auxinas</span>
          <span>BigBud</span>
          <span>Poli</span>
        </section>
      </div>
    </>
  )
}
