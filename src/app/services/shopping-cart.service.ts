import { Injectable } from "@angular/core";
import { CartItem } from "../models/cart-item";
import { MenuItem } from "../models/menu-item";

@Injectable({
  providedIn: "root",
})
export class ShoppingCartService {
  constructor() {}

  items: CartItem[];

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    const foundedItem = this.items.find((c) => c.menuItem.id === item.id);
    if (foundedItem) {
      foundedItem.quantity++;
      return;
    }

    this.items.push(new CartItem(item, 1));
  }

  removeItem(item: MenuItem) {
    const foundedItem = this.items.find((c) => c.menuItem.id === item.id);
  }

  getTotal(): number {
    return this.items.reduce(
      (acc, currentItem) => (acc = acc + currentItem.getTotalValue()),
      0
    );
  }
}
