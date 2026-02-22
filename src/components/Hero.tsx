import { Link, useLocation } from 'react-router-dom';
import styles from './Hero.module.css';

interface HeroProps {
  motto: string;
  brand: string;
}

export default function Hero({ motto, brand }: HeroProps) {
  const location = useLocation();

  const handleScrollToAbout = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', '/#about');
    }
  };

  return (
    <section id="hero" className={styles.hero} aria-label="메인 비주얼">
      {/* 히어로 메인 비주얼(아티스트/컨셉 이미지): 배경에 이미지 넣을 경우 .heroBg에 background-image 설정 */}
      <div className={styles.heroBg} data-placeholder="히어로 메인 비주얼 (아티스트/컨셉 이미지)" />
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <p className={styles.motto}>{motto}</p>
        <p className={styles.brand}>{brand}</p>
        <Link to="/#about" className={styles.scroll} aria-label="소개로 스크롤" onClick={handleScrollToAbout}>
          <span className={styles.scrollText}>소개 보기</span>
          <svg className={styles.scrollIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
