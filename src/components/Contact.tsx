import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Contact</p>
        <h2 className={styles.heading}>
          Say Hello
        </h2>
        <p className={styles.sub}>
          협업 제안, 궁금한 점, 혹은 그냥 인사도 좋습니다.
          <br />
          편하게 메일 보내주세요.
        </p>
        <a href="mailto:yongjinlee0222@gmail.com" className={styles.cta}>
          yongjinlee0222@gmail.com
        </a>
      </div>
    </section>
  );
}
