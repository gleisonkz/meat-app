import { Component, Input, OnInit } from "@angular/core";
import { Restaurant } from "src/app/models/restaurant";

@Component({
  selector: "mt-restaurant",
  templateUrl: "./restaurant.component.html",
  styleUrls: ["./restaurant.component.scss"],
})
export class RestaurantComponent implements OnInit {
  constructor() {}

  @Input() restaurant: Restaurant;

  ngOnInit() {}
}
