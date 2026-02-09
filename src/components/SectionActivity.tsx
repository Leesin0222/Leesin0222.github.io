import ActivityCard from './ActivityCard';
import styles from './SectionActivity.module.css';

interface Activity {
  id: string;
  name: string;
  description: string;
  url: string;
  ctaLabel: string;
  image: string;
}

interface SectionActivityProps {
  activities: readonly Activity[];
}

export default function SectionActivity({ activities }: SectionActivityProps) {
  return (
    <section id="activity" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Activity</p>
        <h2 className={styles.title}>활동</h2>
        <p className={styles.subtitle}>지금 하고 있는 것</p>
        <div className={styles.grid}>
          {activities.map((a) => (
            <ActivityCard key={a.id} activity={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
