import styles from './SectionAbout.module.css';

export default function SectionAbout() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>About</p>
        <h2 className={styles.title}>소개</h2>
        <p className={styles.lead}>주체는 모두 이용진에게 있습니다.</p>
        <p className={styles.body}>
          yongjincompany는 이용진이 하고 싶은 것만 하는 공간입니다.
          지금까지는 음악 아티스트 <strong>유백 (UBACK)</strong>으로 활동하고 있고,
          미연시 게임 <strong>Uchat</strong>을 만들고 있습니다.
        </p>
      </div>
    </section>
  );
}
