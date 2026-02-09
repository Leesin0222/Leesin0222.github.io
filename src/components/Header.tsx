import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

type Link = { name: string; url: string };

interface HeaderProps {
  title: string;
  links: readonly Link[];
}

export default function Header({ title, links }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          <a href="/#">{title}</a>
        </h1>
        <div className={styles.right}>
          <ThemeToggle />
          <nav className={styles.nav}>
            {links.map((link) => (
              <a key={link.url} href={link.url} className={styles.link}>
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
