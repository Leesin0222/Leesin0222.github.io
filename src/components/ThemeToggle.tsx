import { useTheme } from '../hooks/useTheme';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
      >
        {theme === 'dark' ? '라이트' : '다크'}
      </button>
    </div>
  );
}
