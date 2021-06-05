import Head from "next/head";

import { GiTreeBranch } from "react-icons/gi";
import { AiOutlineCheck } from "react-icons/ai";

import { Register } from "../../components/register";

import styles from "../../styles/register.module.scss";

export default function Amazon() {
  return (
    <>
      <Head>
        <title>Amazon Bank</title>
      </Head>

      <section className={styles.sectionRegisterWrapper}>
        <div></div>
        <section>
          <div>
            <span>
              <GiTreeBranch size={35} color="#fff" />
            </span>

            <div>
              <div>
                <h1>
                  <AiOutlineCheck /> Conta
                </h1>
                <h1>
                  <AiOutlineCheck /> Cartão de crédito
                </h1>
                <h1>
                  <AiOutlineCheck /> Função débito
                </h1>
                <h1>Tudo no mesmo verdinho</h1>
              </div>
            </div>

            <div>
              <Register />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
