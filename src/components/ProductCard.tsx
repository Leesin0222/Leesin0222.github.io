import { useCart } from '../contexts/CartContext';
import type { Product } from '../types/product';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const imageUrl = product.image_url || '/placeholder-card.svg';

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={imageUrl}
          alt={`${product.name} 앨범 커버`}
          width={400}
          height={400}
          className={styles.image}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{product.name}</h3>
        {product.description && (
          <p className={styles.desc}>{product.description}</p>
        )}
        <p className={styles.price}>
          {product.price.toLocaleString('ko-KR')}원
        </p>
        <button
          type="button"
          className={styles.cta}
          onClick={() => addItem(product)}
          aria-label={`${product.name} 장바구니에 담기`}
        >
          장바구니 담기
        </button>
      </div>
    </article>
  );
}
