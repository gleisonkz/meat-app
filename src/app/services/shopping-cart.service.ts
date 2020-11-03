import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { CartItem } from "../models/cart-item";
import { MenuItem } from "../models/menu-item";

@Injectable({
  providedIn: "root",
})
export class ShoppingCartService {
  constructor() {}

  private items: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>(
    []
  );

  public getItems(): BehaviorSubject<CartItem[]> {
    return this.items;
  }

  public quantityUp(item: CartItem): void {
    item.quantityUp();
  }

  public quantityDown(item: CartItem): void {
    item.quantityDown();
  }

  addItem(item: MenuItem) {
    const foundItem = this.items
      .getValue()
      .find((c) => c.menuItem.id === item.id);
    const expectations = [
      {
        expect: () => foundItem !== undefined,
        action: () => foundItem.quantity++,
      },
      {
        expect: () => true,
        action: () => this.items.getValue().push(new CartItem(item)),
      },
    ];
    const currentExpect = expectations.find((c) => c.expect());
    currentExpect.action();
  }

  public removeItem(item: CartItem) {
    const items = this.items.getValue();
    items.splice(items.indexOf(item, 1));
    this.items.next(items);
  }

  public clear() {
    this.items.next([]);
  }

  getTotal(): number {
    return this.items
      .getValue()
      .reduce((acc, currentItem) => acc + currentItem.getTotalValue(), 0);
  }
}
