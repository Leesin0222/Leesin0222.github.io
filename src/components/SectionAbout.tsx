import styles from './SectionAbout.module.css';

export default function SectionAbout() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <img
            src="/about-artist.jpg"
            alt="아티스트 대표 사진"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <p className={styles.label}>About</p>
          <h2 className={styles.title}>소개</h2>
          <p className={styles.lead}>아티스트 유백(UBACK)입니다.</p>
          <p className={styles.body}>
            그는 계속해서 하고 싶은 음악을 찾아가고 있습니다.
            음악은 어느새 그에게 삶의 한 부분이 되었습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
