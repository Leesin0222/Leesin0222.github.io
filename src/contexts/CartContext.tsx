import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { Product } from '../types/product';

export type CartItem = { product: Product; quantity: number };

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalAmount: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'uback-cart';

function loadStored(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as { productId: string; quantity: number; product?: Product }[];
    return parsed
      .filter((x) => x.product && x.productId && x.quantity > 0)
      .map((x) => ({ product: x.product!, quantity: x.quantity }));
  } catch {
    return [];
  }
}

function saveStored(items: CartItem[]) {
  try {
    const toSave = items.map(({ product, quantity }) => ({
      productId: product.id,
      quantity,
      product,
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch {
    // ignore
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadStored);

  const addItem = useCallback(
    (product: Product, quantity = 1) => {
      setItems((prev) => {
        const idx = prev.findIndex((i) => i.product.id === product.id);
        const next =
          idx >= 0
            ? prev.map((i, iidx) =>
                iidx === idx ? { ...i, quantity: i.quantity + quantity } : i
              )
            : [...prev, { product, quantity }];
        saveStored(next);
        return next;
      });
    },
    []
  );

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => {
      const next = prev.filter((i) => i.product.id !== productId);
      saveStored(next);
      return next;
    });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((prev) => {
      const next = prev.map((i) =>
        i.product.id === productId ? { ...i, quantity } : i
      );
      saveStored(next);
      return next;
    });
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
    saveStored([]);
  }, []);

  const totalCount = useMemo(
    () => items.reduce((s, i) => s + i.quantity, 0),
    [items]
  );
  const totalAmount = useMemo(
    () => items.reduce((s, i) => s + i.product.price * i.quantity, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalCount,
      totalAmount,
    }),
    [items, addItem, removeItem, updateQuantity, clearCart, totalCount, totalAmount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
