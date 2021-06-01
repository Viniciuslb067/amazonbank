import Head from "next/head";
import Image from "next/image";

import { SectionWithPicture } from "../components/sectionWithPicture";
import { Register } from "../components/register";

import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amazon Bank</title>
      </Head>
      <div id="main-content">
        
      <SectionWithPicture/>
      
        <section className={styles.secondSection}>
          <article className={styles.sectionArticle}>
            <div className={styles.sectionContent}>
              <picture className={styles.sectionPicture}>
                <img src="./2441.jpg"></img>
              </picture>
              <div className={styles.copyContent}>
                <a href="#" className={styles.baseLink}>
                  <h1 className={styles.baseLinkTitle}>Conta do Amazon Bank</h1>
                </a>
                <h1 className={styles.infoText}>
                  <div className={styles.textInfo}>
                    Nossa conta digital com mais de 30 milhões de clientes em
                    todo o Brasil.
                  </div>
                </h1>
              </div>
            </div>

          </article>
        </section>

        <section className={styles.thirdSection}>
          <article className={styles.thirdArticle}>
            <div className={styles.infoCardText}>
              <a href="#" className={styles.infoCardTitle}>
                <h1 className={styles.infoTitle}>Cartão de Crédito</h1>
              </a>
              <p className={styles.infoCardBody}>
                Pode chamar ele de verdinho. Além disso, pode chamar ele de
                moderno, gratuito e prático também.
              </p>
              <a href="#"className={styles.infoCardKnowMore}>Saiba mais
              </a>
            </div>
            <div className={styles.cardImage}>
              <div>
                <div>
                  <picture>
                    <img src="./47653.jpg" ></img>
                  </picture>
                </div>
              </div>
            </div>
          </article>
        </section>

      </div>
    </>
  );
}
