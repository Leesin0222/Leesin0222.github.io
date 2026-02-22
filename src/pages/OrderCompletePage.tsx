import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/site';
import styles from './OrderCompletePage.module.css';

interface OrderState {
  order_number: string;
  total_amount: number;
  customer_name: string;
  deposit_deadline: string | null;
}

export default function OrderCompletePage() {
  const location = useLocation();
  const order = location.state?.order as OrderState | undefined;

  const bankName = import.meta.env.VITE_BANK_NAME ?? siteConfig.bank.bankName;
  const accountNumber = import.meta.env.VITE_BANK_ACCOUNT ?? siteConfig.bank.accountNumber;
  const holder = import.meta.env.VITE_BANK_HOLDER ?? siteConfig.bank.holder;

  if (!order) {
    return (
      <section className={styles.section}>
        <div className={styles.inner}>
          <h1 className={styles.title}>입금 안내</h1>
          <p className={styles.error}>
            주문 정보가 없습니다. 결제하기에서 주문을 완료한 후 입금 안내를 확인해 주세요.
            새로고침 시 이 페이지의 안내가 사라질 수 있습니다.
          </p>
          <p className={styles.contact}>
            문의: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
          </p>
        </div>
      </section>
    );
  }

  const deadlineStr = order.deposit_deadline
    ? new Date(order.deposit_deadline).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.title}>입금 안내</h1>
        <p className={styles.orderNumber}>주문번호: <strong>{order.order_number}</strong></p>
        <div className={styles.bankBlock}>
          <h2 className={styles.subtitle}>입금 계좌</h2>
          <dl className={styles.dl}>
            <dt>은행</dt>
            <dd>{bankName}</dd>
            <dt>계좌번호</dt>
            <dd className={styles.mono}>{accountNumber}</dd>
            <dt>예금주</dt>
            <dd>{holder}</dd>
          </dl>
        </div>
        <div className={styles.amountBlock}>
          <h2 className={styles.subtitle}>입금 금액</h2>
          <p className={styles.amount}>{order.total_amount.toLocaleString('ko-KR')}원</p>
        </div>
        <div className={styles.notes}>
          <p>· 입금자명: <strong>{order.customer_name}</strong> (주문자명과 동일하게 입금해 주세요)</p>
          <p>· 통장 메모/적요에 <strong>주문번호 {order.order_number}</strong> 를 꼭 기입해 주세요.</p>
          {deadlineStr && <p>· 입금 기한: {deadlineStr}</p>}
        </div>
        <p className={styles.contact}>
          문의: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
        </p>
      </div>
    </section>
  );
}
