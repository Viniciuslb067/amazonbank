import Link from "next/link";

import { GiTreeBranch } from "react-icons/gi";
import { CgEnter } from "react-icons/cg";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <>
      <div className={styles.headerWrapper}>
        <header className={styles.headerContainer}>
          <div className={styles.header}>
            <div className={styles.content}>
              <div className={styles.brand}>
                <Link href="/">
                  <a>
                    <GiTreeBranch size={35} className={styles.brandLogo} />
                  </a>
                </Link>
              </div>
              <nav className={styles.list}>
                <li>
                  <Link href="/">
                    <a>Página inicial</a>
                  </Link>
                </li>

                <li>
                  <a>Para você</a>
                </li>

                <li>
                  <a>Conta PJ</a>
                </li>

                <li>
                  <a>O Amazon Bank</a>
                </li>

                <li>
                  <a>Perguntas</a>
                </li>
              </nav>
              <div className={styles.login}>
                <div>
                  <div>
                    <a href="/login" target="_blank">
                      Login
                      <CgEnter size={20} className={styles.iconLogin} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
