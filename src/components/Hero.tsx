import styles from './Hero.module.css';

interface HeroProps {
  motto: string;
  brand: string;
}

export default function Hero({ motto, brand }: HeroProps) {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.motto}>{motto}</p>
        <p className={styles.brand}>{brand}</p>
        <a href="#about" className={styles.scroll} aria-label="소개로 스크롤">
          <span className={styles.scrollText}>소개 보기</span>
          <svg className={styles.scrollIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
