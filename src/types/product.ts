export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  product_type: string;
  stock: number | null;
  is_active: boolean;
  created_at: string;
}

export interface OrderItem {
  product_id: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  order_number: string;
  status: 'pending' | 'paid' | 'cancelled';
  total_amount: number;
  payment_method: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string | null;
  deposit_deadline: string | null;
  created_at: string;
}
