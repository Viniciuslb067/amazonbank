import styles from "./styles.module.scss";

export function SectionWithPicture() {
  return (
    <>
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
          </div>
        </div>
      </section>
    </>
  );
}
