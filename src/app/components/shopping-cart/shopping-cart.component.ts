import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Subscription, Observable } from "rxjs";
import { CartItem } from "src/app/models/cart-item";
import { ShoppingCartService } from "src/app/services/shopping-cart.service";
import { NotificationService } from "../../services/notification.service";

@Component({
  selector: "mt-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"],
})
export class ShoppingCartComponent implements OnInit {
  items$: Observable<CartItem[]>;
  subscription: Subscription[] = [];
  get existingCartItem(): boolean {
    return this.shoppingCartService.existingCartItem;
  }

  constructor(
    private shoppingCartService: ShoppingCartService,
    private notificationService: NotificationService
  ) {}
  ngOnInit() {
    this.items$ = this.shoppingCartService.items$;
    // this.subscription = this.shoppingCartService.items$.subscribe(
    //   (items) => (this.items = items)
    // );
  }

  ngOnDestroy(): void {
    this.subscription.forEach(c => c.unsubscribe());
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
