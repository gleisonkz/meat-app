import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { Restaurant } from "src/app/models/restaurant";

@Component({
  selector: "mt-restaurant",
  templateUrl: "./restaurant.component.html",
  styleUrls: ["./restaurant.component.scss"],
  animations: [
    trigger("stretch", [
      // state("stretched", style({ width: "initial" })),
      transition("void => *", [style({ width: 0 }), animate(900)]),
    ]),
  ],
})
export class RestaurantComponent implements OnInit {
  constructor() {}

  @Input() restaurant: Restaurant;

  ngOnInit() {}
}
