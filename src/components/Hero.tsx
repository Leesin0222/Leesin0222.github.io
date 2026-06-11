import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      el.style.transform = `translateY(${y * 0.3}px)`;
      el.style.opacity = `${1 - y / 800}`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.tag}>One Man, Infinite Possibilities</p>
        <h1 ref={titleRef} className={styles.title}>
          I Build What
          <br />
          I Want.
        </h1>
        <p className={styles.sub}>
          leeyongjin이 하고 싶은 것만 만드는 회사.
          <br />
          기획, 디자인, 개발, 운영까지 혼자 다 합니다.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.cta}>
            Get in Touch
          </a>
          <a href="#features" className={styles.ctaOutline}>
            Our Services
          </a>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
