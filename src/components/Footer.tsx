import styles from './Footer.module.css';

interface Contact {
  email: string;
  label: string;
}

interface FooterProps {
  title: string;
  motto: string;
  contact: Contact;
  copyright: string;
}

export default function Footer({ title, motto, contact, copyright }: FooterProps) {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandRow}>
          <p className={styles.brand}>{title}</p>
          <p className={styles.motto}>{motto}</p>
        </div>
        <a href={`mailto:${contact.email}`} className={styles.contact}>
          {contact.label}
        </a>
        <p className={styles.copyright}>{copyright}</p>
      </div>
    </footer>
  );
}
