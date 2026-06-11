import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.label}>About</p>
          <h2 className={styles.heading}>
            하고 싶은 것만
            <br />
            만드는 사람.
          </h2>
        </div>
        <div className={styles.right}>
          <p className={styles.text}>
            yongjincompany는 leeyongjin 혼자 운영하는 1인 회사입니다.
            남이 시키는 일이 아니라, 내가 진짜 만들고 싶은 것만 만듭니다.
          </p>
          <p className={styles.text}>
            기획부터 디자인, 개발, 배포, 운영까지 모든 과정을 혼자 해냅니다.
            느려도 괜찮습니다. 대신, 만드는 모든 것에 진심을 담습니다.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>1</span>
              <span className={styles.statLabel}>Person, All Roles</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>What I Want</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>0</span>
              <span className={styles.statLabel}>Compromises</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
