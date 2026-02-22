import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { supabase } from '../lib/supabase';
import { siteConfig } from '../config/site';
import styles from './CheckoutPage.module.css';

function formatOrderNumber(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const tail = String(Date.now()).slice(-4);
  return `UBACK-${y}${m}${d}-${tail}`;
}

export default function CheckoutPage() {
  const { items, totalAmount, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
  });

  if (items.length === 0) {
    navigate('/cart', { replace: true });
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const order_number = formatOrderNumber();
      const deposit_deadline = new Date();
      deposit_deadline.setDate(deposit_deadline.getDate() + siteConfig.bank.depositDeadlineDays);

      const orderPayload = {
        order_number,
        status: 'pending',
        total_amount: totalAmount,
        payment_method: 'bank_transfer',
        customer_name: form.customer_name.trim(),
        customer_email: form.customer_email.trim(),
        customer_phone: form.customer_phone.trim() || null,
        deposit_deadline: deposit_deadline.toISOString(),
      };
      const { data: orderData, error: orderErr } = await supabase
        .from('orders')
        .insert(orderPayload)
        .select('id')
        .single();

      if (orderErr) throw orderErr;
      if (!orderData?.id) throw new Error('주문 생성 실패');

      const orderItems = items.map(({ product, quantity }) => ({
        order_id: orderData.id,
        product_id: product.id,
        quantity,
        price: product.price,
      }));

      const { error: itemsErr } = await supabase.from('order_items').insert(orderItems);
      if (itemsErr) throw itemsErr;

      clearCart();
      navigate(`/order/${orderData.id}`, {
        replace: true,
        state: {
          order: {
            order_number,
            total_amount: totalAmount,
            customer_name: form.customer_name.trim(),
            deposit_deadline: deposit_deadline.toISOString(),
          },
        },
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : '주문 처리 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.title}>결제</h1>
        <p className={styles.amount}>
          결제 금액: <strong>{totalAmount.toLocaleString('ko-KR')}원</strong>
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            주문자명 <span className={styles.required}>*</span>
            <input
              type="text"
              required
              value={form.customer_name}
              onChange={(e) => setForm((f) => ({ ...f, customer_name: e.target.value }))}
              className={styles.input}
              placeholder="홍길동"
            />
          </label>
          <label className={styles.label}>
            이메일 <span className={styles.required}>*</span>
            <input
              type="email"
              required
              value={form.customer_email}
              onChange={(e) => setForm((f) => ({ ...f, customer_email: e.target.value }))}
              className={styles.input}
              placeholder="you@example.com"
            />
          </label>
          <label className={styles.label}>
            연락처 (선택)
            <input
              type="tel"
              value={form.customer_phone}
              onChange={(e) => setForm((f) => ({ ...f, customer_phone: e.target.value }))}
              className={styles.input}
              placeholder="010-0000-0000"
            />
          </label>
          {error && <p className={styles.error}>{error}</p>}
          <p className={styles.note}>
            계좌 이체로 결제됩니다. 주문 완료 후 입금 안내 페이지에서 계좌 정보를 확인해 주세요.
          </p>
          <button type="submit" disabled={loading} className={styles.submit}>
            {loading ? '처리 중...' : '주문하기'}
          </button>
        </form>
      </div>
    </section>
  );
}
