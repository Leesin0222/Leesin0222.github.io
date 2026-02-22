import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import styles from './InquiryPage.module.css';

function buildMailtoBody(form: {
  name: string;
  email: string;
  trackCount: string;
  format: string;
  deadline: string;
  message: string;
}): string {
  const lines = [
    '[믹싱·마스터링 문의]',
    '',
    '---',
    `이름: ${form.name}`,
    `이메일: ${form.email}`,
    `트랙 수: ${form.trackCount || '-'}`,
    `포맷: ${form.format || '-'}`,
    `희망 기한: ${form.deadline || '-'}`,
    '',
    '---',
    '추가 요청 사항:',
    form.message || '(없음)',
  ];
  return lines.join('\n');
}

export default function InquiryPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    trackCount: '',
    format: '',
    deadline: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('[UBACK] 믹싱·마스터링 문의');
    const body = encodeURIComponent(buildMailtoBody(form));
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Inquiry</p>
        <h1 className={styles.title}>믹싱 · 마스터링 문의</h1>
        <p className={styles.lead}>
          트랙 수, 포맷, 희망 기한을 알려주시면 견적과 일정을 안내해 드립니다.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.field}>
            이름 <span className={styles.required}>*</span>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className={styles.input}
              placeholder="홍길동"
            />
          </label>
          <label className={styles.field}>
            이메일 <span className={styles.required}>*</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className={styles.input}
              placeholder="you@example.com"
            />
          </label>
          <label className={styles.field}>
            트랙 수
            <input
              type="text"
              value={form.trackCount}
              onChange={(e) => setForm((f) => ({ ...f, trackCount: e.target.value }))}
              className={styles.input}
              placeholder="예: 10트랙"
            />
          </label>
          <label className={styles.field}>
            포맷
            <input
              type="text"
              value={form.format}
              onChange={(e) => setForm((f) => ({ ...f, format: e.target.value }))}
              className={styles.input}
              placeholder="예: WAV 44.1kHz, 스테레오"
            />
          </label>
          <label className={styles.field}>
            희망 기한
            <input
              type="text"
              value={form.deadline}
              onChange={(e) => setForm((f) => ({ ...f, deadline: e.target.value }))}
              className={styles.input}
              placeholder="예: 2주 내"
            />
          </label>
          <label className={styles.field}>
            추가 요청 사항
            <textarea
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className={styles.textarea}
              placeholder="참고할 사항이 있으면 적어 주세요."
              rows={4}
            />
          </label>
          <button type="submit" className={styles.submit}>
            문의 메일 보내기
          </button>
        </form>
        <p className={styles.note}>
          버튼을 누르면 메일 앱이 열립니다. 위 내용이 본문에 채워진 상태로 전송해 주세요.
        </p>
        <Link to="/#mixing" className={styles.back}>
          믹싱·마스터링 섹션으로
        </Link>
      </div>
    </section>
  );
}
