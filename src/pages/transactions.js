import Head from "next/head";

import styles from "../styles/transactions.module.scss";

export default function Transactions() {
  return (
    <>
    <Head>
      <title>Amazon Bank - Histórico</title>
    </Head>

      <div className={styles.fixedHeaderMenu}>
        <nav>
          <ul></ul>
          <section>
            <ul>
              <li>
                <a>
                  Atendimento
                </a>
              </li>
              <li></li>
              <li>
                <a>Vinicius Lima Barbosa</a>
                <ul></ul>
              </li>
            </ul>
            <ul>
              <li>
                <a>Histórico</a>
              </li>
              <li>
                <a>Faturas</a>
              </li>
            </ul>
          </section>
        </nav>
      </div>

      <div className={styles.feed}>
        <table>
          <tbody>
            
          </tbody>
        </table>
      </div>

    </>
  )
}