import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import styles from './CartPage.module.css';

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalAmount, totalCount } = useCart();

  if (items.length === 0) {
    return (
      <section className={styles.section}>
        <div className={styles.inner}>
          <h1 className={styles.title}>장바구니</h1>
          <p className={styles.empty}>장바구니가 비어 있습니다.</p>
          <Link to="/shop" className={styles.link}>샵으로 가기</Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.title}>장바구니</h1>
        <ul className={styles.list}>
          {items.map(({ product, quantity }) => (
            <li key={product.id} className={styles.item}>
              <div className={styles.itemInfo}>
                <span className={styles.itemName}>{product.name}</span>
                <span className={styles.itemPrice}>
                  {product.price.toLocaleString('ko-KR')}원 × {quantity} ={' '}
                  {(product.price * quantity).toLocaleString('ko-KR')}원
                </span>
              </div>
              <div className={styles.itemActions}>
                <label className={styles.quantityLabel}>
                  수량
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) =>
                      updateQuantity(product.id, parseInt(e.target.value, 10) || 1)
                    }
                    className={styles.quantityInput}
                  />
                </label>
                <button
                  type="button"
                  onClick={() => removeItem(product.id)}
                  className={styles.removeBtn}
                  aria-label={`${product.name} 삭제`}
                >
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.footer}>
          <p className={styles.total}>
            합계 <strong>{totalAmount.toLocaleString('ko-KR')}원</strong> ({totalCount}개)
          </p>
          <Link to="/checkout" className={styles.checkoutBtn}>
            결제하기
          </Link>
        </div>
      </div>
    </section>
  );
}
