import { OrderItem } from "./order-item";

export interface Order {
  address: string;
  address2: string;
  email: string;
  name: string;
  number: number;
  paymentMethod: string;
  orderItems: OrderItem[];
}
