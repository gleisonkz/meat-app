import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Order } from "src/app/models/order";
import { OrderService } from "../../services/order.service";

@Component({
  selector: "mt-order-finished",
  templateUrl: "./order-finished.component.html",
  styleUrls: ["./order-finished.component.scss"],
})
export class OrderFinishedComponent implements OnInit {
  constructor(private orderService: OrderService) {}

  orderID: number;
  rated: boolean = false;

  ngOnInit() {
    this.orderID = +sessionStorage.getItem("orderID");
  }

  finishOrder() {
    this.rated = true;
    sessionStorage.clear();
  }
}
