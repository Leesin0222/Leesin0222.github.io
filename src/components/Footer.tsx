import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

interface Contact {
  email: string;
  label: string;
}

type NavLink = { name: string; url: string };

interface FooterProps {
  title: string;
  motto: string;
  links: readonly NavLink[];
  contact: Contact;
  social: { instagram: string; youtube: string };
  copyright: string;
}

export default function Footer({ title, motto, links, contact, social, copyright }: FooterProps) {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandRow}>
          <p className={styles.brand}>{title}</p>
          <p className={styles.motto}>{motto}</p>
        </div>
        <nav className={styles.nav} aria-label="푸터 링크">
          {links.map((link) => (
            <Link key={link.url} to={link.url} className={styles.link}>
              {link.name}
            </Link>
          ))}
        </nav>
        <a href={`mailto:${contact.email}`} className={styles.contact}>
          {contact.label}
        </a>
        <div className={styles.social} aria-label="SNS">
          {social.instagram && (
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram" title="Instagram">IG</a>
          )}
          {social.youtube && (
            <a href={social.youtube} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube" title="YouTube">YT</a>
          )}
        </div>
        <p className={styles.copyright}>{copyright}</p>
      </div>
    </footer>
  );
}
