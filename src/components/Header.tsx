import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

type NavLink = { name: string; url: string };

interface HeaderProps {
  title: string;
  links: readonly NavLink[];
}

export default function Header({ title, links }: HeaderProps) {
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
        </div>
      </div>
    </header>
  );
}
