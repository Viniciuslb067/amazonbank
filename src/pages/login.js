import Head from "next/head";
import { GiTreeBranch } from "react-icons/gi";

import styles from "../styles/login.module.scss";

export default function Login() {
  return (
    <div className={styles.contentWrapper}>
      <Head>
        <title>Amazon Bank | Login</title>
      </Head>

      <GiTreeBranch size={60} color="#fff" />

      <div className={styles.container}>
        <div className={styles.form}>
          <p>Login</p>

          <div className={styles.fields}>
            <input type="text" required />
            <span></span>
            <label htmlFor="">Email</label>
          </div>

          <div className={styles.fields}>
            <input type="password" required />
            <span></span>
            <label htmlFor="">Senha</label>
          </div>

          <button>CONTINUAR</button>
          <div className={styles.recoverLinks}>
            <a>
              <span>Esqueci minha senha</span>
            </a>
            <a>
              <span>Ainda não sou cliente</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
