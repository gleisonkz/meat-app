import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Order } from "src/app/models/order";
import { OrderService } from "../../services/order.service";

@Component({
  selector: "mt-order-finished",
  templateUrl: "./order-finished.component.html",
  styleUrls: ["./order-finished.component.scss"],
})
export class OrderFinishedComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService
  ) {}
  state$: Observable<Order>;
  orderID: number;
  rated: boolean = false;

  ngOnInit() {
    // this.state$ = this.activatedRoute.paramMap.pipe(
    //   map(() => {
    //     console.log(window.history.state);
    //     return window.history.state;
    //   })
    // );
  }
}
