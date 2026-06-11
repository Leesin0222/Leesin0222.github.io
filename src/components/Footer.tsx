import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>yongjincompany</span>
        </div>
        <div className={styles.right}>
          <span className={styles.copy}>
            &copy; {new Date().getFullYear()} yongjincompany. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
