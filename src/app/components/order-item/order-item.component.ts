import { Component, Input, OnInit } from "@angular/core";
import { CartItem } from "../../models/cart-item";

@Component({
  selector: "mt-order-item",
  templateUrl: "./order-item.component.html",
  styleUrls: ["./order-item.component.scss"],
})
export class OrderItemComponent implements OnInit {
  @Input() item: CartItem;

  constructor() {}

  ngOnInit(): void {}
}
