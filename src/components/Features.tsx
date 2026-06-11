import styles from './Features.module.css';

const features = [
  {
    label: '01',
    title: 'Planning',
    desc: '아이디어 구상부터 기획까지. 내가 진짜 쓰고 싶은 서비스를 설계합니다.',
  },
  {
    label: '02',
    title: 'Design',
    desc: 'UI/UX 디자인을 직접 합니다. 심플하고, 쓸데없는 건 빼고, 핵심만 남깁니다.',
  },
  {
    label: '03',
    title: 'Development',
    desc: '프론트엔드, 백엔드, 인프라까지. 풀스택으로 처음부터 끝까지 만듭니다.',
  },
  {
    label: '04',
    title: 'AI & Automation',
    desc: 'AI를 활용한 자동화와 지능형 시스템. 반복적인 일은 기계에게 맡깁니다.',
  },
  {
    label: '05',
    title: 'Deployment',
    desc: '빌드, 배포, 모니터링까지 혼자서 운영합니다. 서버도 내가 관리합니다.',
  },
  {
    label: '06',
    title: 'Everything Else',
    desc: '필요한 건 뭐든 배워서 합니다. 못 하는 건 없고, 안 하는 것만 있습니다.',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <p className={styles.label}>What I Do</p>
          <h2 className={styles.heading}>Services</h2>
        </div>
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.label} className={styles.card}>
              <span className={styles.cardLabel}>{f.label}</span>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
