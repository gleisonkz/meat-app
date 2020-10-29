import { Component, OnInit } from "@angular/core";
import { Restaurant } from "src/app/models/restaurant";
import { RestaurantsService } from "../../services/restaurants.service";

@Component({
  selector: "mt-restaurants",
  templateUrl: "./restaurants.component.html",
  styleUrls: ["./restaurants.component.scss"],
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(private restaurantesService: RestaurantsService) {}

  ngOnInit() {
    this.restaurantesService
      .getRestaurants()
      .subscribe((restaurants) => (this.restaurants = restaurants));
  }
}
