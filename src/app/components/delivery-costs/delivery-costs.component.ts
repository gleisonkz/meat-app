import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "mt-delivery-costs",
  templateUrl: "./delivery-costs.component.html",
  styleUrls: ["./delivery-costs.component.scss"],
})
export class DeliveryCostsComponent implements OnInit {
  constructor() {}

  @Input() totalItems: number;
  @Input() deliveryCost: number;

  ngOnInit(): void {}

  getTotalOrder(): number {
    return this.totalItems + this.deliveryCost;
  }
}
