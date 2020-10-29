import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "mt-restaurant-rating",
  templateUrl: "./restaurant-rating.component.html",
  styleUrls: ["./restaurant-rating.component.scss"],
})
export class RestaurantRatingComponent implements OnInit {
  constructor() {}

  @Input() rating: string;

  ngOnInit() {}
}
