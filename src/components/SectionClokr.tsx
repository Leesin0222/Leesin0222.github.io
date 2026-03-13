import { Link } from 'react-router-dom';
import styles from './SectionClokr.module.css';

export default function SectionClokr() {
  return (
    <section id="clokr" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>App</p>
        <h2 className={styles.title}>Clokr 앱</h2>
        <p className={styles.lead}>AI 기반 할 일 관리 · 리포트 앱</p>
        <p className={styles.body}>
          Clokr는 자연어로 할 일을 입력하면 AI가 우선순위, 마감 시간 등을 분석해 주는 할 일 관리 앱입니다. 하루 시작/종료
          시간 설정, 리마인더, 하루·주간 리포트 기능으로 작업 루틴을 정리할 수 있습니다.
        </p>
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <h3>주요 기능</h3>
            <ul>
              <li>자연어 기반 할 일 입력 및 AI 자동 분석</li>
              <li>우선순위 · 마감 시간 관리</li>
              <li>하루 마감 리포트 · 주간 리포트</li>
              <li>하루 시작/종료 알림 및 리마인더</li>
            </ul>
          </div>
          <div className={styles.featureItem}>
            <h3>개인정보 및 데이터 사용</h3>
            <p>
              Clokr는 Google 로그인을 통해 계정을 생성하며, 할 일 내용과 설정 정보는 사용자의 일정 관리와 AI 분석, 리포트
              제공을 위해서만 사용됩니다. 광고 식별자(ADID)는 광고 제공 및 성과 측정 목적에 한해 사용됩니다.
            </p>
            <p className={styles.policyText}>
              자세한 내용은 아래 개인정보처리방침에서 확인하실 수 있습니다.
            </p>
            <Link to="/privacy-policy" className={styles.policyLink}>
              개인정보처리방침 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

