import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, Observable } from "rxjs";
import { CartItem } from "../models/cart-item";
import { MenuItem } from "../models/menu-item";

@Injectable({
  providedIn: "root",
})
export class ShoppingCartService {
  constructor() {}

  private itemsSource = new BehaviorSubject<CartItem[]>([]);
  items$: Observable<CartItem[]> = this.itemsSource.asObservable();
  get existingCartItem() {
    return !!this.itemsSource.value.length;
  }

  public quantityUp(item: CartItem): void {
    item.quantityUp();
    this.itemsSource.next([...this.itemsSource.value]);
  }

  public quantityDown(item: CartItem): void {
    item.quantityDown();
    this.itemsSource.next([...this.itemsSource.value]);
  }

  public addItem(item: MenuItem) {
    const foundItem = this.itemsSource.value.find(
      c => c.menuItem.id === item.id
    );

    const expectations = [
      {
        expect: () => foundItem !== undefined,
        action: () => this.quantityUp(foundItem),
      },
      {
        expect: () => true,
        action: () =>
          this.itemsSource.next([
            ...this.itemsSource.value,
            new CartItem(item),
          ]),
      },
    ];
    const currentExpect = expectations.find(c => c.expect());
    currentExpect.action();
  }

  public removeItem(item: CartItem) {
    const items = this.itemsSource.value;
    items.splice(items.indexOf(item), 1);
    this.itemsSource.next(items);
  }

  public clear() {
    this.itemsSource.next([]);
  }

  public getTotal(): number {
    return this.itemsSource.value.reduce(
      (acc, cur) => acc + cur.getTotalValue(),
      0
    );
  }
}
