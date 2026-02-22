import { Link } from 'react-router-dom';
import styles from './SectionShop.module.css';

export default function SectionShop() {
  return (
    <section id="shop" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Shop</p>
        <h2 className={styles.title}>샵</h2>
        <p className={styles.lead}>앨범과 굿즈를 만나보세요.</p>
        <p className={styles.body}>
          유백(UBACK)의 음반과 굿즈를 샵에서 구매하실 수 있습니다.
        </p>
        <Link to="/shop" className={styles.cta}>
          샵 보기
        </Link>
      </div>
    </section>
  );
}
