import { Link } from 'react-router-dom';
import styles from './SectionMixing.module.css';

export default function SectionMixing() {
  return (
    <section id="mixing" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Service</p>
        <h2 className={styles.title}>믹싱 · 마스터링</h2>
        <p className={styles.lead}>트랙 믹싱과 마스터링 작업을 받습니다.</p>
        <p className={styles.body}>
          문의 시 트랙 수, 포맷, 기한을 알려주시면 견적과 일정을 안내해 드립니다.
        </p>
        <Link to="/inquiry" className={styles.cta}>
          문의하기
        </Link>
      </div>
    </section>
  );
}
