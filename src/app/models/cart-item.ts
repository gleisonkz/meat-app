import { MenuItem } from "./menu-item";

export class CartItem {
  constructor(public menuItem: MenuItem, public quantity: number = 1) {}

  getTotalValue(): number {
    return this.menuItem.price * this.quantity;
  }

  quantityUp() {
    this.quantity++;
  }

  quantityDown() {
    this.quantity > 1 && this.quantity--;
  }
}
