import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Subscription, Observable } from "rxjs";
import { CartItem } from "src/app/models/cart-item";
import { ShoppingCartService } from "src/app/services/shopping-cart.service";
import { NotificationService } from "../../services/notification.service";
import {
  trigger,
  state,
  style,
  transition,
  keyframes,
  animate,
} from "@angular/animations";

@Component({
  selector: "mt-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"],
  animations: [
    trigger("row", [
      state("ready", style({ opacity: 1 })),
      transition(
        "void => ready",
        animate(
          "300ms 0s ease-in",
          keyframes([
            style({ opacity: 0, transform: "translateX(-30px)", offset: 0 }),
            style({ opacity: 0.8, transform: "translateX(15px)", offset: 0.6 }),
            style({ opacity: 1, transform: "translateX(0px)", offset: 1 }),
          ])
        )
      ),
      transition(
        "ready => void",
        animate(
          "300ms 0s ease-out",
          keyframes([
            style({ opacity: 1, transform: "translateX(0px)", offset: 0 }),
            style({
              opacity: 0.8,
              transform: "translateX(-10px)",
              offset: 0.2,
            }),
            style({ opacity: 0, transform: "translateX(30px)", offset: 1 }),
          ])
        )
      ),
    ]),
  ],
})
export class ShoppingCartComponent implements OnInit {
  items$: Observable<CartItem[]>;
  subscription: Subscription[] = [];
  get existingCartItem(): boolean {
    return this.shoppingCartService.existingCartItem;
  }

  rowState = "ready";

  constructor(private shoppingCartService: ShoppingCartService) {}
  ngOnInit() {
    this.items$ = this.shoppingCartService.items$;
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
