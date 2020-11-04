import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
import { CartItem } from "src/app/models/cart-item";
import { ShoppingCartService } from "src/app/services/shopping-cart.service";

@Component({
  selector: "mt-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"],
})
export class ShoppingCartComponent implements OnInit {
  items: CartItem[];
  subscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) {}
  ngOnInit() {
    this.subscription = this.shoppingCartService.items$.subscribe(
      (items) => (this.items = items)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getTotal(): number {
    return this.shoppingCartService.getTotal();
  }

  quantityUp(item: CartItem): void {
    this.shoppingCartService.quantityUp(item);
  }

  quantityDown(item: CartItem): void {
    this.shoppingCartService.quantityDown(item);
  }

  addItem(item: CartItem): void {
    this.shoppingCartService.addItem(item.menuItem);
  }

  clearCart(): void {
    this.shoppingCartService.clear();
  }

  removeItem(item: CartItem): void {
    this.shoppingCartService.removeItem(item);
  }
}
