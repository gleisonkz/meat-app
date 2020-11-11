import { Injectable } from "@angular/core";
import { CartItem } from "../models/cart-item";
import { ShoppingCartService } from "./shopping-cart.service";
import { HttpClient } from "@angular/common/http";
import { Order } from "../models/order";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(
    private shoppingCartService: ShoppingCartService,
    private http: HttpClient
  ) {}

  getTotalValue(): number {
    return this.shoppingCartService.getTotal();
  }

  postOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${environment.meatApiUrl}/orders`, order);
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
