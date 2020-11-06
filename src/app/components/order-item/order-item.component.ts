import { Component, Input, OnInit } from "@angular/core";
import { CartItem } from "../../models/cart-item";
import { OrderService } from "../../services/order.service";

@Component({
  selector: "mt-order-item",
  templateUrl: "./order-item.component.html",
  styleUrls: ["./order-item.component.scss"],
})
export class OrderItemComponent implements OnInit {
  @Input() item: CartItem;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {}

  quantityUp(item: CartItem): void {
    console.log("UP");
    console.log(item);

    this.orderService.quantityUp(item);
  }

  quantityDown(item: CartItem): void {
    this.orderService.quantityDown(item);
  }

  removeItem(item: CartItem): void {
    this.orderService.removeItem(item);
  }
}
