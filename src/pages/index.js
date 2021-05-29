import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amazon Bank</title>
      </Head>
      <div id="main-content">
        <section className={styles.firstSection}>
          <div>
            <div className={styles.sectionContainer}>
              <div className={styles.sectionText}>
                <h1 className={styles.title}>
                  Você no controle da sua vida financeira
                </h1>
                <h2 className={styles.subTitle}>
                  A facilidade de resolver tudo pelo aplicativo, e com um
                  atendimento 24h que realmente te ajuda
                </h2>
              </div>

              {/* <div className={styles.sectionRegister}>
                <div className={styles.formWrapper}>
                  <form>
                    <div className={styles.formContent}>
                      <h3>Peça sua conta e cartão de crédito do Amazon Bank</h3>
                      <div className={styles.textFieldGroup}>
                        <label>
                          <input></input>
                          <div>
                            <span>Digite seu CPF</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
          {/* <Image 
            width={1980}
            height={736}
            src="/woman.jpg"
          />   */}
        </section>

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

        <section></section>
      </div>
    </>
  );
}
