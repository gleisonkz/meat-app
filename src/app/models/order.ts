import { OrderItem } from "./order-item";

export interface Order {
  id: string;
  address: string;
  address2: string;
  email: string;
  name: string;
  number: number;
  paymentMethod: string;
  orderItems: OrderItem[];
}
