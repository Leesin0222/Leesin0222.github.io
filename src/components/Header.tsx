import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useCart } from '../contexts/CartContext';
import styles from './Header.module.css';

type NavLink = { name: string; url: string };

interface HeaderProps {
  title: string;
  links: readonly NavLink[];
}

export default function Header({ title, links }: HeaderProps) {
  const { totalCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          <Link to="/">{title}</Link>
        </h1>
        <div className={styles.right}>
          <ThemeToggle />
          <nav className={styles.nav}>
            {links.map((link) => (
              <Link key={link.url} to={link.url} className={styles.link}>
                {link.name}
              </Link>
            ))}
          </nav>
          <Link to="/cart" className={styles.cartLink} aria-label="장바구니">
            <svg className={styles.cartIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {totalCount > 0 && (
              <span className={styles.cartBadge} aria-label={`장바구니 ${totalCount}개`}>
                {totalCount > 99 ? '99+' : totalCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
