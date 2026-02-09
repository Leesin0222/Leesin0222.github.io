import styles from './ActivityCard.module.css';

interface Activity {
  id: string;
  name: string;
  description: string;
  url: string;
  ctaLabel: string;
  image: string;
}

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <a href={activity.url} className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={activity.image} alt={`${activity.name} (예시)`} width={400} height={225} className={styles.image} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{activity.name}</h3>
        <p className={styles.desc}>{activity.description}</p>
        <span className={styles.cta}>{activity.ctaLabel}</span>
      </div>
    </a>
  );
}
