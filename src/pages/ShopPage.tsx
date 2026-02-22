import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { Product } from '../types/product';
import ProductCard from '../components/ProductCard';
import styles from './ShopPage.module.css';

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error: e } = await supabase
          .from('products')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: false });
        if (e) throw e;
        setProducts((data as Product[]) ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : '상품을 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <div className={styles.wrap}><p className={styles.message}>불러오는 중...</p></div>;
  if (error) return <div className={styles.wrap}><p className={styles.error}>{error}</p></div>;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Shop</p>
        <h1 className={styles.title}>샵</h1>
        <p className={styles.subtitle}>앨범 · 굿즈</p>
        <div className={styles.grid}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        {products.length === 0 && (
          <p className={styles.empty}>등록된 상품이 없습니다.</p>
        )}
        <p className={styles.cartLink}>
          <Link to="/cart">장바구니 보기</Link>
        </p>
      </div>
    </section>
  );
}
