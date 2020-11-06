import { Injectable } from "@angular/core";
import { CartItem } from "../models/cart-item";
import { ShoppingCartService } from "./shopping-cart.service";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(private shoppingCartService: ShoppingCartService) {}

  getTotalValue(): number {
    return this.shoppingCartService.getTotal();
  }

  quantityUp(item: CartItem): void {
    this.shoppingCartService.quantityUp(item);
  }

  quantityDown(item: CartItem): void {
    this.shoppingCartService.quantityDown(item);
  }

  removeItem(item: CartItem): void {
    this.shoppingCartService.removeItem(item);
  }
}
